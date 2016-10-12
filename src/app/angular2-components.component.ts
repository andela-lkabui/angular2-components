import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';


@Component({
  // moduleId: module.id,
  // selector: 'angular2-components-app',
  // templateUrl: 'angular2-components.component.html',
  // styleUrls: ['angular2-components.component.css']
  selector: 'my-app',
  styles: [`
    h1 {
        color: #545454;
        background: #02a8f4;
        padding: 15px;
        box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);
    }
  `],
  template: `
    <h1>Hello from the {{ componentName }}.</h1>
  `
})
export class Angular2ComponentsAppComponent {
  // title = 'angular2-components works!';
  componentName = 'AppComponent'
}

bootstrap(Angular2ComponentsAppComponent);
