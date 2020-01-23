import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-personal-details',
  templateUrl: './patient-personal-details.component.html',
  styleUrls: ['./patient-personal-details.component.css']
})
export class PatientPersonalDetailsComponent implements OnInit {
  editView:Boolean = false;
  patientFirstName: string = "John";
  patientLastName: string = "Doe";
  patientContactDetails: string ='99999 99999';
  patientGender: string = 'Male';
  patientBloodGroup: string = 'O+ve';
  patientAddress: string = 'Bellandur';
  patientCity: string = 'Bengaluru';
  patientPincode: string = '111111';
  patientRegistrationDate:string ='23/01/2020';
  patientID: string='1101';
  constructor() { }

  ngOnInit() {
  }

  enableEdit(){
    this.editView=!this.editView;
  }
  updatePatient(){
    this.enableEdit();
  }
  cities = [
    {value: 's-0', viewValue: 'Bengaluru'},
    {value: 's-1', viewValue: 'Bellandur'},
    {value: 's-2', viewValue: 'BTM'}
  ];
  bloodGroups = [
    {value: 'A+', viewValue: 'A+'},
    {value: 'B+', viewValue: 'B+'},
    {value: 'O+', viewValue: 'O+'},
    {value: 'O-', viewValue: 'O-'}
  ];
  test(){
  }
}
