import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KycinfoComponent } from './components/kycinfo/kycinfo.component';

import { MaterialModule } from '../../shared/material.module';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AttributesTableComponent } from './attributes-table.component';

import { HttpClientModule } from '@angular/common/http';
import { AttributeServiceService } from '../service/attribute-service.service';


const routes: Routes = [
  {path: '', component: AttributesTableComponent},
  {path: '**', redirectTo:''}
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KycinfoComponent,AttributesTableComponent],
  providers:[AttributeServiceService]
})
export class AttributesTableModule { }
