import { SyncStarterPage } from './app.po';

describe('sync-starter App', () => {
  let page: SyncStarterPage;

  beforeEach(() => {
    page = new SyncStarterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
