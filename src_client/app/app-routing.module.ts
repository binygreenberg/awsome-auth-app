/**
 * Created by binyamin.greenberg on 8/1/17.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login.component'
import {RegisterComponent} from './register.component'
import {ProfileComponent} from './profile.component'
import {MainPageComponent} from "./main-page.component";

const routes: Routes = [
  { path: '',  component: MainPageComponent },
  { path: 'register',  component: RegisterComponent },
  { path: 'login',     component: LoginComponent },
  { path: 'profile',     component: ProfileComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
