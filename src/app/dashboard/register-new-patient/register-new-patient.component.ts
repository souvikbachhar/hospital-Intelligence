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
  constructor(private _formBuilder: FormBuilder,private snackBar: MatSnackBar,private router:Router) { }

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
      patientProblem:['']
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
    this.router.navigateByUrl('/app/dashboard/saved');
  }

}
