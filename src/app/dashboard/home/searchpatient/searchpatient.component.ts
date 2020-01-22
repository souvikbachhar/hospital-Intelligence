import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchpatient',
  templateUrl: './searchpatient.component.html',
  styleUrls: ['./searchpatient.component.css']
})
export class SearchpatientComponent implements OnInit {

  constructor(private _router:Router) { }
  patients = [
    {
      name: 'Arkansas',
      contactId: '2978'
    },
    {
      name: 'California',
      contactId: '3914'},
    {
      name: 'Florida',
      contactId: '2027'
    },
    {
      name: 'Texas',
      contactId: '2747',
    }
  ];
  
  ngOnInit() {
  }

  searchPatientDetails(){
    console.log('clicked');
    this._router.navigateByUrl('/app/dashboard/patientdetails');
  }
}
