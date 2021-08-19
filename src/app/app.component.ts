import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UserProfile';

  toAbout() {
    document.getElementById("about")?.scrollIntoView();
  }

  toContact() {
    document.getElementById("contact")?.scrollIntoView();
  }

  backToTop() {
    document.getElementById("top")?.scrollIntoView();
  }
}
