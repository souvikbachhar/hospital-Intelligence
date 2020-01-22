import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AddHospitalComponent } from './add-hospital/add-hospital.component';
import { DoctorAvailabilityComponent } from './doctor-availability/doctor-availability.component';
import { DetailsSavedComponent } from './details-saved/details-saved.component';
import { RegisterNewPatientComponent } from './register-new-patient/register-new-patient.component';
import { RegisterExistingPatientComponent } from './register-existing-patient/register-existing-patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: 'home', loadChildren: () => import (`./home/home.module`).then(m => m.HomeModule) },
      { path: 'doctoravailability', component: DoctorAvailabilityComponent },
      { path: 'addpatient', component: AddPatientComponent },
      { path: 'addhospital', component: AddHospitalComponent },
      { path: 'saved', component: DetailsSavedComponent },
      { path: 'registernewpatient', component: RegisterNewPatientComponent},
      { path: 'registerexistingpatient', component: RegisterExistingPatientComponent},
      { path:'patientdetails',component:PatientDetailsComponent}
     // { path: 'search',loadChildren:() =>import (`./home/home.module`).then(m=>m.HomeModule)}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
