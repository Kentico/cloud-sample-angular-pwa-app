import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';

import { environment } from '../environments/environment';
import { DeliveryClientProvider } from './setup/delivery-client.provider';
import { GeolocationService } from './services/geolocation.service';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,

    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    DeliveryClientProvider,
    GeolocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
