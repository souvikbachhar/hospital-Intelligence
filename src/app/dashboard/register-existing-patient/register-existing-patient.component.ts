import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-register-existing-patient',
  templateUrl: './register-existing-patient.component.html',
  styleUrls: ['./register-existing-patient.component.css']
})
export class RegisterExistingPatientComponent implements OnInit {
  isEditable:Boolean= true;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup:FormGroup;
  date = new FormControl(new Date());
  bloodGroups = [
    {value: 'A+', viewValue: 'A+'},
    {value: 'B+', viewValue: 'B+'},
    {value: 'O+', viewValue: 'O+'},
    {value: 'O-', viewValue: 'O-'}
  ];
  constructor(private _formBuilder: FormBuilder,
    private router:Router,
    private snackBar:MatSnackBar) { }

  ngOnInit() {
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
      patientProblem:[''],
      patientRegistrationFees:[''],
      patientTotalFees:[''],
      patientRecipt:['']
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

  submit(){
    this.router.navigateByUrl('/app/dashboard/saved');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
