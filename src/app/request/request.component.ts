import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-request',
  standalone: true,
  imports: [],
  templateUrl: './request.component.html',
  styleUrl: './request.component.css',
  animations:[
    trigger('fadeInUp', [
      transition(':enter', [ // when the element is inserted into the DOM
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('1s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class RequestComponent {
  constructor(private router: Router) {}

  navigateToDoctor1() {
    this.router.navigate(['/doctor1']);  // Navigate to the doctor1 route
  }

  navigateToDoctor2() {
    this.router.navigate(['/doctor2']);
  }

  navigateToDoctor3() {
    this.router.navigate(['/doctor3']);
  }

  navigateToDoctor4() {
    this.router.navigate(['/doctor4']);
  }
}
