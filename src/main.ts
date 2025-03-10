import {Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { ProfileComponent } from './app/profile/profile.component';
import { RequestComponent } from './app/request/request.component';
import { Doctor1Component } from './app/doctor1/doctor1.component';
import { Doctor2Component } from './app/doctor2/doctor2.component';
import { Doctor3Component } from './app/doctor3/doctor3.component';
import { Doctor4Component } from './app/doctor4/doctor4.component';
import { BackgroundComponent } from './app/background/background.component';
import { RequestDetailsComponent } from './app/request-details/request-details.component';
import { AppoinmentDetailsComponent } from './app/appoinment-details/appoinment-details.component';

// Define your routes directly
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'request', component: RequestComponent },
  { path: 'background', component: BackgroundComponent},
  { path: 'doctor1', component: Doctor1Component }, 
  { path: 'doctor2', component: Doctor2Component }, 
  { path: 'doctor3', component: Doctor3Component },
  { path: 'doctor4', component: Doctor4Component }, 
  { path: 'request-details', component: RequestDetailsComponent }, 
  { path: 'appoinment-details', component: AppoinmentDetailsComponent }, 
  
  
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)], // Use provideRouter to set up routing
});
