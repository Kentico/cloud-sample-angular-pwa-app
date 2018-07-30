import { Injectable } from '@angular/core';

@Injectable()
export class GeolocationService {

  constructor() { }

  getMapLink(latitude, longitude) {
    const query = `${latitude},${longitude}`;

    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      return `https://maps.apple.com/?q=${query}`;
    } else {
      return `https://maps.google.com/?q=${query}`;
    }
  }
}
