import { AngularBootstrapExamplePage } from './app.po';

describe('angular-bootstrap-example App', () => {
  let page: AngularBootstrapExamplePage;

  beforeEach(() => {
    page = new AngularBootstrapExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
