import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/appmaterial-module';
import { SearchhospitalComponent } from './searchhospital/searchhospital.component';
import { SearchpatientComponent } from './searchpatient/searchpatient.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent,
    SearchhospitalComponent,
    SearchpatientComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    CustomMaterialModule
  ]
})
export class HomeModule { }
