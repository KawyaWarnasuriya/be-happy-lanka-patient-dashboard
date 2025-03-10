import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-request-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './request-details.component.html',
  styleUrl: './request-details.component.css'
})
export class RequestDetailsComponent {
  constructor(private router: Router) {}
  requestDetails = {
    doctor: '',
    date: '',
    description: ''
  };

  onSubmit() {
    console.log('Form submitted!', this.requestDetails);
    this.requestDetails = { doctor: '', date: '', description: '' }; // Reset the form
  }

  navigateToRequest() {
    this.router.navigate(['/request']);  // Navigate to the doctor1 route
  }

  navigateTo() {
    this.router.navigate(['/']);
  }

}



