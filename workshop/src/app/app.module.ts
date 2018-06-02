import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { WorkshopNewComponent } from './workshop/workshop-new/workshop-new.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkshopComponent,
    WorkshopNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
