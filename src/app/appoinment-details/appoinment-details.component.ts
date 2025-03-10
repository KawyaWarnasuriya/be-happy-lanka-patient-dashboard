import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appoinment-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './appoinment-details.component.html',
  styleUrl: './appoinment-details.component.css'
})
export class AppoinmentDetailsComponent {
  constructor(private router: Router) {}
  appointmentData = {
    doctor: '',
    date: '',
    description: ''
  };

  onSubmit() {
    console.log('Form submitted!', this.appointmentData);
    this.appointmentData = { doctor: '', date: '', description: '' }; // Reset the form
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}



