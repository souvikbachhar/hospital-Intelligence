import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-patient-registration',
  templateUrl: './print-patient-registration.component.html',
  styleUrls: ['./print-patient-registration.component.css']
})
export class PrintPatientRegistrationComponent implements OnInit {
  registrationFees: string="450";
  patientFirstName: string = "John";
  patientLastName: string = "Doe";
  patientContactDetails: string ='99999 99999';
  patientGender: string = 'Male';
  patientBloodGroup: string = 'O+ve';
  patientAddress: string = 'Bellandur';
  patientCity: string = 'Bengaluru';
  patientPincode: string = '111111';
  patientID:string='1011';
  selectedHospital: string='Hospital1';
  hospitalAddress: string='Banglore';
  selectedDepartment: string='Skin';
  selectedDoctor: string='Doctor1';
  selectedAppointmentDate: string='22/01/2020';
  selectedAppointmentTime: string="12:00";
  constructor() { }

  ngOnInit() {
    window.print();
  }

}
