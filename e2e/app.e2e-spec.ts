import { FeatureModulesPage } from './app.po';

describe('feature-modules App', () => {
  let page: FeatureModulesPage;

  beforeEach(() => {
    page = new FeatureModulesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
