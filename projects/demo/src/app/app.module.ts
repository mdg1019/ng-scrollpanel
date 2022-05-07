import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgScrollpanelModule } from 'projects/ng-scrollpanel/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgScrollpanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
