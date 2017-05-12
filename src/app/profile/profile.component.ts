import { Auth } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
  selector: 'profile',
  templateUrl: `profile.component.html`,
})
export class ProfileComponent  { 
  constructor(private auth: Auth){

  }
}
