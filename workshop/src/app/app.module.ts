import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { WorkshopNewComponent } from './workshop/workshop-new/workshop-new.component';
import { RoutingRoutingModule } from './routing/routing-routing.module';
import { BeerComponent } from './beer/beer.component';
import { BeerSaveComponent } from './beer/beer-save/beer-save.component';
import { BeerListComponent } from './beer/beer-list/beer-list.component';
import { BeerEditComponent } from './beer/beer-edit/beer-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkshopComponent,
    WorkshopNewComponent,
    BeerComponent,
    BeerSaveComponent,
    BeerListComponent,
    BeerEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
