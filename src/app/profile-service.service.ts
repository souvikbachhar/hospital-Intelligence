import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  loggedInUser;
  authenticationStatus:boolean=true;
  constructor() { }
}
