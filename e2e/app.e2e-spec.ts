import { AppPage } from './app.po';

describe('cloud-sample-angular-pwa-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display header text in toolbar', () => {
    page.navigateTo();
    expect(page.getHeaderToolbarElement()).toEqual('Pack and Go');
  });
});
