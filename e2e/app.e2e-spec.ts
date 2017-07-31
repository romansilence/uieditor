import { UiEditorAppPage } from './app.po';

describe('ui-editor-app App', () => {
  let page: UiEditorAppPage;

  beforeEach(() => {
    page = new UiEditorAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
