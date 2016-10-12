import { Component } from '@angular/core';

@Component({
  selector: 'my-friends',
  template: `
      <h1>Hello from the {{ componentName }}!</h1>
      <div *ngFor="#f of friends">
        <h3>Name: {{ f.name }}</h3>
        <h4>Age: {{ f.age }}</h4>
      </div>
  `
})
export class FriendComponent {

  componentName = 'FriendComponent';

  friends = [];
  
  constructor(private fs: FriendService) {
    this.friends = fs.getFriends();
  }
}