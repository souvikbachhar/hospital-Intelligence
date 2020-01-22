import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { DoctorAvailabilityComponent } from './doctor-availability/doctor-availability.component';
import { AddHospitalComponent } from './add-hospital/add-hospital.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { DashboardComponent } from './dashboard.component';
import { CustomMaterialModule } from '../appmaterial-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsSavedComponent } from './details-saved/details-saved.component';
import { RegisterNewPatientComponent } from './register-new-patient/register-new-patient.component';
import { RegisterExistingPatientComponent } from './register-existing-patient/register-existing-patient.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientPersonalDetailsComponent } from './patient-personal-details/patient-personal-details.component';
import { PatientHospitalVisitDetailsComponent } from './patient-hospital-visit-details/patient-hospital-visit-details.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DoctorAvailabilityComponent,
    AddHospitalComponent,
    AddPatientComponent,
    DetailsSavedComponent,
    RegisterNewPatientComponent,
    RegisterExistingPatientComponent,
    PatientDetailsComponent,
    PatientPersonalDetailsComponent,
    PatientHospitalVisitDetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule
  ]
})
export class DashboardModule { }
