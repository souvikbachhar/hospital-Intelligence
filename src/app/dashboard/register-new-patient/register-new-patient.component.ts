import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-new-patient',
  templateUrl: './register-new-patient.component.html',
  styleUrls: ['./register-new-patient.component.css']
})
export class RegisterNewPatientComponent implements OnInit {
  isLinear = false;
  isEditable:Boolean= true;
  date;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup:FormGroup;
  fourthFormGroup:FormGroup;
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
  selectedAppointmentTime: string='12:00';
  registrationFees: string="450";
  
  bloodGroups = [
    {value: 'A+', viewValue: 'A+'},
    {value: 'B+', viewValue: 'B+'},
    {value: 'O+', viewValue: 'O+'},
    {value: 'O-', viewValue: 'O-'}
  ];
  constructor(private _formBuilder: FormBuilder,private snackBar: MatSnackBar,private router:Router) {
    this.date = new FormControl(new Date());
   }

  ngOnInit() {
    this.isEditable=true;
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      patientContact: ['', Validators.required],
      patientGender: [''],
      patientBloodGroup: [''],
      patientAddress:[''],
      patientCity:[''],
      patientPincode:['']
    });
    this.secondFormGroup = this._formBuilder.group({
      patientHospital:[''],
      patientDepartment:[''],
      patientTime:[''],
      patientDoctor:[''],
      patientDate:[]
    });
    this.thirdFormGroup = this._formBuilder.group({
      patientProblem:['']
    });
    this.fourthFormGroup=this._formBuilder.group({

    });
    this.secondFormGroup.controls.patientDate=this.date; 
  }
  
  

  cities = [
    {value: 's-0', viewValue: 'Bengaluru'},
    {value: 's-1', viewValue: 'Bellandur'},
    {value: 's-2', viewValue: 'BTM'}
  ];
  hospitals = [
    {value: 'h-0', viewValue: 'Hospital1'},
    {value: 'h-1', viewValue: 'Hospital2'},
    {value: 'h-2', viewValue: 'Hospital3'}
  ];
  departments = [
    {value: 'd-0', viewValue: 'General'},
    {value: 'd-1', viewValue: 'Eye'},
    {value: 'd-2', viewValue: 'Skin'}
  ];
  timelines = [
    {value: 'd-0', viewValue: '12:00'},
    {value: 'd-1', viewValue: '11:00'},
    {value: 'd-2', viewValue: '10:00'}
  ];
  doctors = [
    {value: 'd-0', viewValue: 'Doctor1'},
    {value: 'd-1', viewValue: 'Doctor2'},
    {value: 'd-2', viewValue: 'Doctor3'}
  ];

  test(){
    console.log(this.firstFormGroup.controls.firstName.value);
    console.log(this.firstFormGroup.controls.patientBloodGroup.value);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  submit(){
    //this.router.navigateByUrl('/app/dashboard/saved');
    // var printContents = document.getElementById('printableArea').innerHTML;
    // var originalContents = document.body.innerHTML;

    // document.body.innerHTML = printContents;

    // window.print();

    // document.body.innerHTML = originalContents;

//    var  w=window.open();
// w.document.write(document.getElementById('printableArea').innerHTML);
// w.print();
// w.close();
  this.isEditable=false;
  window.open('app/printPatientRegistration', "_blank");
  }
  rePrint(){
    window.open('app/printPatientRegistration', "_blank");
  }

}
