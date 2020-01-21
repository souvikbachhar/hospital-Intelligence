import { Component, OnInit } from '@angular/core';

import { ProfileService} from '../profile-service.service';
import {ActivatedRoute, Router,ParamMap} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private profileService:ProfileService,
    private activetedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  userName='admin@healthcarerecord.com';
  userPassword='admin';
  private loginStatus: boolean = false;

  login(){
    console.log(this.userName);
    console.log(this.userPassword);
    if(this.userName=='admin@healthcarerecord.com'&&this.userPassword=='admin'){
      this.profileService.authenticationStatus=true;
      this.loginStatus=false;
      this.router.navigate(['dashboard/home'], {relativeTo: this.activetedRoute});
    }else{
      this.loginStatus=true;
    }
    console.log(this.profileService.authenticationStatus)
  }
}
