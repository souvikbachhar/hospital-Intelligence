import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SearchpatientComponent } from './searchpatient/searchpatient.component';
import { SearchhospitalComponent } from './searchhospital/searchhospital.component';


const routes: Routes = [
  {path :'',component:HomeComponent,children:[
    {path :'searchpatient',component:SearchpatientComponent},
    {path :'searchhospital',component:SearchhospitalComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
