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
  MdIconModule,
  MdButtonModule,
  MdChipsModule,
  MdProgressSpinnerModule,
  MdTooltipModule,
  MdTabsModule,
  MdDialogModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { EditCourseComponent } from './edit-course/edit-course.component';

@NgModule({
  declarations: [
    AppComponent,
    EditCourseComponent
  ],
  entryComponents: [
    EditCourseComponent
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
    MdIconModule,
    MdButtonModule,
    MdChipsModule,
    MdProgressSpinnerModule,
    MdTooltipModule,
    MdTabsModule,
    MdDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
