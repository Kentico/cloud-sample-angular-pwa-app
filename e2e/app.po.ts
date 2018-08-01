import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderToolbarElement() {
    return element(by.css('app-root mat-toolbar h1')).getText();
  }
}
