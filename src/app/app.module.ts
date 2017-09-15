import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { MdComponentsModule } from './md-components/md-components.module';

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
    MdComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
