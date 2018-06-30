import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

//  users: Array<{name: string, email: string}>;

  // user: {'name': string, 'email': string} = {
  //   'name': '',
  //   'email': ''
  // };


  // courses;

  constructor() {
    // this.beers = JSON.parse(this.storage.get('users'));
  }

  // add(user: {'name': string, 'email': string}) {
  //   let users;
  //   users = this.storage.get('users');

  //   if (users !== null) {

  //     users = JSON.parse(users);
  //     users.push(user);

  //     this.storage.set('users', JSON.stringify(users));

  //   } else {
  //     users = [user];
  //     this.storage.set('users', JSON.stringify(users));
  //   }

  //   this.users = users;
  // }

  // remove(user) {
  //   let users = JSON.parse(this.storage.get('users'));
  //   users = users.filter(function(u){
  //      return u.email != user.email;
  //   });

  //   this.storage.set('users', JSON.stringify(users));

  //   this.users = users;
  // }
}
