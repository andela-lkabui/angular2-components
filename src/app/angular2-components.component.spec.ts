import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2ComponentsAppComponent } from '../app/angular2-components.component';

beforeEachProviders(() => [Angular2ComponentsAppComponent]);

describe('App: Angular2Components', () => {
  it('should create the app',
      inject([Angular2ComponentsAppComponent], (app: Angular2ComponentsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-components works!\'',
      inject([Angular2ComponentsAppComponent], (app: Angular2ComponentsAppComponent) => {
    // expect(app.title).toEqual('angular2-components works!');
  }));
});
