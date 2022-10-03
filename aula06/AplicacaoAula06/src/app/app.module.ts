import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArianMonstroComponent } from './arian-monstro/arian-monstro.component';

@NgModule({
  declarations: [
    AppComponent,
    ArianMonstroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
