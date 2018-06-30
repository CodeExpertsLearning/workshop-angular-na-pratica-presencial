import { Router } from '@angular/router';
import { HttpService } from './../../service/http.service';
import { Component, OnInit } from '@angular/core';
declare var toastr;

@Component({
  selector: 'app-beer-save',
  templateUrl: './beer-save.component.html',
  styleUrls: ['./beer-save.component.css']
})
export class BeerSaveComponent implements OnInit {

  beer: { 'name', 'price', 'type', 'mark', 'img' } = {
    'name': '',
    'price': '',
    'type': '',
    'mark': '',
    'img': ''
  };

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  save(beer) {
    this.httpService.post('/beers', beer).subscribe(res =>
      toastr.success('Sucesso', res.msg));
      this.router.navigate(['/beers/list']);
  }
}
