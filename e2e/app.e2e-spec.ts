import { RoseCitySciFiPage } from './app.po';

describe('rose-city-sci-fi App', function() {
  let page: RoseCitySciFiPage;

  beforeEach(() => {
    page = new RoseCitySciFiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
