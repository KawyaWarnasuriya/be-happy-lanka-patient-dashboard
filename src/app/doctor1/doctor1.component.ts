import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor1',
  standalone: true,
  templateUrl: './doctor1.component.html',
  styleUrls: ['./doctor1.component.css'],
  imports: [CommonModule]
})
export class Doctor1Component implements OnInit, OnDestroy {

  slides = [
    {
      heading: 'Personal Information',
      content: [
        { label: 'Full Name', value: 'Dr. Sarah Lee' },
        { label: 'Age', value: '38' },
        { label: 'Gender', value: 'Male' },
        { label: 'Email', value: 'sarahlee222@gmail.com' },
        { label: 'Phone', value: '+1 234 567 890' },
        { label: 'Address', value: '123 Main Street, New York' }
      ]
    },
    {
      heading : 'Education Qualifications',
      content: [
        { label: 'Bachelor of Psychology (B.A.)', value: 'Stanford University, USA (2007)' },
        { label: 'Masters in Clinical Psychology (M.Sc.)', value: 'Columbia University, USA (2010)' },
        { label: 'Ph.D. in Counseling Psychology ', value: 'University of California, Berkeley, USA (2015)' },
        { label: 'Additional Certifications', value: 'Certified Cognitive Behavioral Therapist (CBT), Licensed Professional Counselor (LPC)'},
      ]
    },
    {
      heading: 'Experience',
      content: [
        { 
          label: 'Senior Counseling Psychologist', 
          value: 'MindWell Mental Health Center (2016 – Present) specializes in Cognitive Behavioral Therapy (CBT) and mindfulness techniques. It provides therapy for anxiety, depression, and trauma.' 
        },
        { 
          label: 'Previous Hospitals', 
          value: 'New York Mental Health Center – Worked with individuals and families on emotional and psychological challenges. Assisted clients in stress management and personal growth.' 
        }
      ]
    }
    
  ];
  
  slideImages = [
    'url("")',
    'url("")',
    'url("")'
  ];

  currentSlide = 0;
  slideInterval: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 6000);
  }


  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  navigateToRequest() {
    this.router.navigate(['/request']);
  }

  navigateToRequestDetails() {
    this.router.navigate(['/request-details']);
  }

  getBackgroundImage() {
    return "url('')";
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
}


