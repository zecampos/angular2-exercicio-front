import { Auth } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
  selector: 'home',
  templateUrl: `home.component.html`,
})
export class HomeComponent  { 
  constructor(private auth: Auth){

  }
}
