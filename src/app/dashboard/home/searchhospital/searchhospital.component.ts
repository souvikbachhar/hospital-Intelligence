import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchhospital',
  templateUrl: './searchhospital.component.html',
  styleUrls: ['./searchhospital.component.css']
})
export class SearchhospitalComponent implements OnInit {
  hospitals =[
    {
      name: 'Hospital1',
      availableDoctors: [
        {
          "name":"doc1",
          "contact":"1234"
        },
        {
          "name":"doc2",
          "contact":"1234"
        }
      ]
    },
    {
      name: 'Hospital3',
      availableDoctors: [
        {
          "name":"doc1",
          "contact":"1234"
        }
      ]
    },
    {
      name: 'Hospital2',
      availableDoctors: [
        {
          "name":"doc3",
          "contact":"1234"
        }
      ]
    },
    {
      name: 'Hospital4',
      availableDoctors: [
        {
          "name":"doc4",
          "contact":"1234"
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  searchHospitalDetails(){
    
  }

}
