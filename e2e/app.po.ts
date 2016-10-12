export class Angular2ComponentsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-components-app h1')).getText();
  }
}
