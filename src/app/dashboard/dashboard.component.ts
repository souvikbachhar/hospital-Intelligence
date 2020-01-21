import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private profileService:ProfileService,
    private activetedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    if(this.profileService.authenticationStatus==false){
      this.router.navigate(['app']);
    }
  }

  logout(){
    console.log('logout');
    this.profileService.authenticationStatus=false;
    this.router.navigate(['app']);
  }
}
