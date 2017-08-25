import { HttpDummyPage } from './app.po';

describe('http-dummy App', () => {
  let page: HttpDummyPage;

  beforeEach(() => {
    page = new HttpDummyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
