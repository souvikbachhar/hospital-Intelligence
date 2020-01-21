import { Component, OnInit, Inject } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/alert-dialog/alert-dialog.component';
import { ConfirmationDialog } from 'src/app/confirmation-dialog/confirmation-dialog.component';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.css']
})
export class AddHospitalComponent implements OnInit {

  constructor(private snackBar: MatSnackBar,public dialog: MatDialog) { }

  ngOnInit() {
  }

  addHospital(){
    console.log('added')
  }

  states: State[] = [
    {value: 's-0', viewValue: 'Karnataka'},
    {value: 's-1', viewValue: 'TamilNadu'},
    {value: 's-2', viewValue: 'Andhra Pradesh'}
  ];

  cities = [
    {value: 's-0', viewValue: 'Bengaluru'},
    {value: 's-1', viewValue: 'Bellandur'},
    {value: 's-2', viewValue: 'BTM'}
  ];

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  
}

export interface State {
  value: string;
  viewValue: string;
}
