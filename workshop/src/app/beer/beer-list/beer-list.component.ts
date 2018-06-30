import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../service/http.service';
declare var toastr;

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  beers: Array<{ 'name', 'price', 'type', 'mark', 'img' }>;

  constructor(private httpService: HttpService) {
    this.httpService.get('/beers').subscribe(res => this.beers = res);

  }

  ngOnInit() {
  }

  remove(beer) {
    this.httpService.delete(`/beers/${beer.id}`).subscribe(res => {
      toastr.success('Sucesso', res.msg);
      window.location.reload();
    });
  }

}
