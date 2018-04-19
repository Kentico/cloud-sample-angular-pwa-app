import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DeliveryClientProvider } from './delivery-client.provider';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DeliveryClientProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
