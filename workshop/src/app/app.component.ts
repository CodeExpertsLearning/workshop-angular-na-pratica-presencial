import { Component } from '@angular/core';
import { StorageService } from './service/storage.service';
import { HttpService } from './service/http.service';
declare var toastr;

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

  beers: Array<{ 'name', 'price', 'type', 'mark', 'img' }>;

  beer: { 'name', 'price', 'type', 'mark', 'img' } = {
    'name': '',
    'price': '',
    'type': '',
    'mark': '',
    'img': ''
  };

  courses;
  isUpdate: boolean = false;

  constructor(
    private httpService: HttpService,
    private storage: StorageService
  ) {
    // this.beers = JSON.parse(this.storage.get('users'));

    this.httpService.get('/beers').subscribe(res => this.beers = res);
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

  save(beer) {
    this.httpService.post('/beers', beer).subscribe(res => toastr.success('Sucesso', res.msg));
  }

  edit(beer) {
    this.isUpdate = true;
    this.beer = beer;
  }

  update(beer) {
    this.httpService.put('/beers', beer).subscribe(res => {

      this.beer = {
        'name': '',
        'price': '',
        'type': '',
        'mark': '',
        'img': ''
      };
      this.isUpdate = false;

      toastr.success('Sucesso', res.msg);
      window.location.reload();
    });
  }

  remove(beer) {
    this.httpService.delete(`/beers/${beer.id}`).subscribe(res => {
      toastr.success('Sucesso', res.msg);
      window.location.reload();
    });
  }

  // remove(user) {
  //   let users = JSON.parse(this.storage.get('users'));
  //   users = users.filter(function(u){
  //      return u.email != user.email;
  //   });

  //   this.storage.set('users', JSON.stringify(users));

  //   this.users = users;
  // }
}
