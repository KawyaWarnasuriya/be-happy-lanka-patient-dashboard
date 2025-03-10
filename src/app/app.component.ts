import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router'; 
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestComponent } from './request/request.component';
import { NgIf } from '@angular/common';
import { Doctor1Component } from './doctor1/doctor1.component';
import { Doctor2Component } from './doctor2/doctor2.component';
import { Doctor3Component } from './doctor3/doctor3.component';
import { Doctor4Component } from './doctor4/doctor4.component';
import { BackgroundComponent } from './background/background.component';
import { RequestDetailsComponent } from './request-details/request-details.component';
import { AppoinmentDetailsComponent } from './appoinment-details/appoinment-details.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    SidebarComponent, 
    DashboardComponent, 
    ProfileComponent, 
    RequestComponent, 
    NgIf, 
    Doctor1Component, 
    Doctor2Component, 
    Doctor3Component, 
    Doctor4Component, 
    BackgroundComponent, 
    RequestDetailsComponent,
    AppoinmentDetailsComponent,
    
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'patient_dashboard';
  isSidebarVisible = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Scroll to the top on navigation
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        window.scrollTo(0, 0);  // Scroll to the top of the page
      }
    });
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
