import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import{AppRoutingModule} from './app-routing.module'
//the angular/material modules
import {MdButtonModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material'
import {MdInputModule} from '@angular/material';


import { AppComponent } from './app.component';
import {RegisterComponent} from "./register.component";
import {LoginComponent} from "./login.component";
import {MainPageComponent} from "./main-page.component";
import {ProfileComponent} from "./profile.component";


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MainPageComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MdToolbarModule,
    FlexLayoutModule,
    MdButtonModule,
    MdInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
