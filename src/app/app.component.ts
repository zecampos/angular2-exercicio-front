import { Auth } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
})
export class AppComponent  { 
  constructor(private auth: Auth){

  }
}
