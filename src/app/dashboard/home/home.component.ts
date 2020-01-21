import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ELEMENT_DATA = [
    {position: 1, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com'},
    {position: 1, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com'},
    {position: 1, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com'},
    {position: 1, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com'},
    {position: 1, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com'}
  ];
  patientSearchQuery: string;
  hospitalSearchQuery: string;
  filteredPatients: Observable<patientDetails[]>;
  enablePatientSearchResult: boolean = false;
  enableHospitalSearchResult: boolean = false;

  constructor() { 
    
  }

  ngOnInit() {
  }
  searchPatient(){
    this.enableHospitalSearchResult=false;
    this.enablePatientSearchResult=true;
    console.log(this.patientSearchQuery);
  }

  searchHospital(){
    this.enableHospitalSearchResult=true;
    this.enablePatientSearchResult=false;
    console.log(this.hospitalSearchQuery);
  }

}

export interface patientDetails {
  name: string;
  contactId: string;
}