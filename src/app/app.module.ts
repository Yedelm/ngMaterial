import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { AttributesTableComponent } from './attributes-table/attributes-table.component';



@NgModule({
  declarations: [
    AppComponent,
    AttributesTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
