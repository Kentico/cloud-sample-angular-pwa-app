import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { DeliveryClient, ImageUrlBuilder } from 'kentico-cloud-delivery';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';


import { PointOfInterest } from '../models/point_of_interest';

@Component({
  selector: 'app-point-of-interest-detail',
  templateUrl: './point-of-interest-detail.component.html',
  styleUrls: ['./point-of-interest-detail.component.scss']
})
export class PointOfInterestDetailComponent implements OnInit, OnDestroy {
  routingSubscription: Subscription;
  dataSubscription: Subscription;
  pointOfInterest: PointOfInterest;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(
    private route: ActivatedRoute,
    private deliveryClient: DeliveryClient
  ) { }

  ngOnInit() {
    this.galleryOptions = [
      {
        image: false,
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        previewZoom: true,
        previewInfinityMove : true,
        imageAnimation: NgxGalleryAnimation.Slide,
        imageSwipe: true,
        imageArrowsAutoHide: true,
        height: '100px',
        thumbnailsRemainingCount: true
      },
      {
        breakpoint: 500,
        width: '100%',
        thumbnailsColumns: 2,
      }
    ];
    this.routingSubscription =
      this.route.params.subscribe(params => {
        if (params['id']) {
          this.dataSubscription = this.deliveryClient
            .items<PointOfInterest>()
            .equalsFilter('elements.url_slug', params['id'])
            .getObservable ()
            .subscribe((response) => {
              this.pointOfInterest = response.firstItem;
              if (response.firstItem.pictures.value) {
                this.galleryImages = response.firstItem.pictures.value.map(picture => {
                  return {
                    small: new ImageUrlBuilder(picture.url).withWidth(120).getUrl(),
                    big: picture.url,
                    medium: picture.url,
                    url: picture.url
                  };
                });
              }
            });

        }
      });
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}
