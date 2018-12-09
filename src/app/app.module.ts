import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // for template form approach
    HttpModule,
    ReactiveFormsModule // for reactive fomr approach
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
