import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  patientView=false;
  constructor(private _formBuilder: FormBuilder,private snackBar: MatSnackBar) { }

  ngOnInit() {
    
  }
  patientViewChanged(){
    if(this.patientView==true){
      console.log('dont edit');
    }else{
      console.log('edit');
    }
  }


}
