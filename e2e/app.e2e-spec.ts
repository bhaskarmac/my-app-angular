import { MyAppAngular2Page } from './app.po';

describe('my-app-angular2 App', () => {
  let page: MyAppAngular2Page;

  beforeEach(() => {
    page = new MyAppAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
