import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MdCheckboxModule,
  MdRadioModule,
  MdSelectModule,
  MdInputModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdIconModule
} from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdCheckboxModule,
    MdRadioModule,
    MdSelectModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
