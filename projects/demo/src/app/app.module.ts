import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgScrollpanelModule } from 'projects/ng-scrollpanel/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    NgScrollpanelModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
