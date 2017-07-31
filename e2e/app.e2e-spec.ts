import { PhysioAppPage } from './app.po';

describe('physio-app App', () => {
  let page: PhysioAppPage;

  beforeEach(() => {
    page = new PhysioAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
