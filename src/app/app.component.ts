import { Component, OnInit, OnDestroy } from '@angular/core';
import { DeliveryClient, ItemResponses } from 'kentico-cloud-delivery';
import { Subscription } from 'rxjs';
import { GeolocationService } from './geolocation.service';

import { PointOfInterest } from './models/point_of_interest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}


