import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,  // Make sure it's standalone
  imports : [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) {}


  onPendingRequestsClick() {
    console.log('Pending Requests button clicked');
    // Example: Navigate to 'approved-requests' route
    this.router.navigate(['/pending-requests']);
  }

  onApprovedRequestsClick() {
    console.log('Approved Requests button clicked');
    // Example: Navigate to 'approved-requests' route
    this.router.navigate(['/approved-requests']);
  }

  

  navigateToAppoinmentDetails() {
    this.router.navigate(['/appoinment-details']);  // Navigate to the appoinmet-details route
  }

  // Handling likes for multiple posts
  posts = [
    { id: 1, isLiked: false, likeCount: 0 },
    { id: 2, isLiked: false, likeCount: 0 },
    { id: 3, isLiked: false, likeCount: 0 }

  ];

  toggleLike(postId: number) {
    const post = this.posts.find(p => p.id === postId);
    if (post) {
      post.isLiked = !post.isLiked;
      post.isLiked ? post.likeCount++ : post.likeCount--;
    }
  }




  // Scroll animation using Intersection Observer
  ngAfterViewInit() {
    const elements = document.querySelectorAll('.post, .card');  // Select elements to animate

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');  // Add 'visible' class to trigger animation
          observer.unobserve(entry.target);  // Stop observing after the animation is triggered
        }
      });
    }, {
      threshold: 0.1,  // Trigger animation when 10% of the element is in the viewport
    });

    elements.forEach((element) => {
      observer.observe(element);  // Observe each element
    });
  }
}
