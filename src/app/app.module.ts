import { Auth } from './services/auth.service';
import { routing, AppRoutingProviders } from './app.rounting';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppComponent }  from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent,
                  HomeComponent,
                  ProfileComponent
  
   ],
   providers: [AppRoutingProviders, AUTH_PROVIDERS, Auth],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
