import { HttpService } from './../../service/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var toastr;

@Component({
  selector: 'app-beer-edit',
  templateUrl: './beer-edit.component.html',
  styleUrls: ['./beer-edit.component.css']
})
export class BeerEditComponent implements OnInit {
  private beer = {
    'name': '',
    'price': '',
    'type': '',
    'mark': '',
    'img': ''
  };

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService
  ) {
    this.route.params.subscribe(params => {
      this.httpService.get(`/beers/${params['beer']}`).subscribe(data => this.beer = data);
    });
  }

  ngOnInit() {
  }

  update(beer) {
    this.httpService.put('/beers', beer).subscribe(res => {
      toastr.success('Sucesso', res.msg);
      window.location.reload();
    });
  }

}
