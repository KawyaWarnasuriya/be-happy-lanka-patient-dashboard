import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profilePicSource = new BehaviorSubject<string>(
    'https://attic.sh/emmcx191fyaodflybsh6uotj2xfc'
  );
  profilePic$ = this.profilePicSource.asObservable();

  updateProfilePic(newPicUrl: string): void {
    this.profilePicSource.next(newPicUrl);
    localStorage.setItem('profilePicUrl', newPicUrl);
  }

  loadInitialProfilePic(): void {
    const storedPic = localStorage.getItem('profilePicUrl');
    if (storedPic) {
      this.profilePicSource.next(storedPic);
    }
  }
}
