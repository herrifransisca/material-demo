import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdChipsModule,
  MdDatepickerModule,
  MdDialogModule,
  MdIconModule,
  MdInputModule,
  MdNativeDateModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdSelectModule,
  MdTabsModule,
  MdTooltipModule,
} from '@angular/material';

@NgModule({
  exports: [
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
  ]
})
export class MdComponentsModule { }
