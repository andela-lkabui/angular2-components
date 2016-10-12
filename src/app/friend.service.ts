import { Injectable } from '@angular/core';

@Injectable()

export class FriendService {
  
  friends: Array<any>;

  constructor() {
    this.friends = [
      { age: 30, name: 'David Schwimmer' },
      { age: 30, name: 'Jennifer Aniston' },
      { age: 30, name: 'Courtney Cox' },
      { age: 30, name: 'Matt Le Blanc' },
      { age: 30, name: 'Lisa Kudrow' },
      { age: 30, name: 'Matthew Perry' }
    ];
  }

  getFriends() {
    return this.friends;
  }
}