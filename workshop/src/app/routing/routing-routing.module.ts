import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkshopComponent } from '../workshop/workshop.component';
import { BeerComponent } from '../beer/beer.component';
import { BeerSaveComponent } from '../beer/beer-save/beer-save.component';
import { BeerListComponent } from '../beer/beer-list/beer-list.component';
import { BeerEditComponent } from '../beer/beer-edit/beer-edit.component';

const routes: Routes = [
  {'path': 'home', 'component': WorkshopComponent},
  { 'path': 'beers', children: [
    { 'path': 'list', 'component': BeerListComponent, },
    { 'path': 'new', 'component': BeerSaveComponent, },
    { 'path': 'edit/:beer', 'component': BeerEditComponent, },
  ]},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
