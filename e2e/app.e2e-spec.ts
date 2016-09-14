import { UserRegistrationTestPage } from './app.po';

describe('user-registration-test App', function() {
  let page: UserRegistrationTestPage;

  beforeEach(() => {
    page = new UserRegistrationTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
