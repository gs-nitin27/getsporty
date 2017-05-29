import { GetsportyPage } from './app.po';

describe('getsporty App', () => {
  let page: GetsportyPage;

  beforeEach(() => {
    page = new GetsportyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
