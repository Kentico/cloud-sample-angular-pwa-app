import { Component, OnInit, OnDestroy } from '@angular/core';
import { DeliveryClient, ContentItem } from 'kentico-cloud-delivery';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  dataSubscription: Subscription;
  pointsOfInterest: ContentItem[];

  constructor(private deliveryClient: DeliveryClient) { }

  ngOnInit() {
    this.dataSubscription = this.deliveryClient
      .items<ContentItem>()
      .type('point_of_interest')
      .getObservable()
      .subscribe(response => {
        this.pointsOfInterest = response.items;
      });
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

  openMap(pointOfInterest) {
    location.href = 'http://maps.google.com/?q='
    + pointOfInterest.latitude__decimal_degrees_.value
    + ','
    + pointOfInterest.longitude__decimal_degrees_.value;
  }
}


