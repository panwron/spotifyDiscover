import { SpotifyDiscoverPage } from './app.po';

describe('spotify-discover App', function() {
  let page: SpotifyDiscoverPage;

  beforeEach(() => {
    page = new SpotifyDiscoverPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
