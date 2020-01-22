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
  constructor() { }

  ngOnInit() {
  }

  enableEdit(){
    this.editView=!this.editView;
  }
  updatePatient(){
    this.enableEdit();
  }
}
