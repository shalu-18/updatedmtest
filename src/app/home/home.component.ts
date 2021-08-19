import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'UserProfile';

  constructor(public dialog: MatDialog, public router: Router, private userService: UserServiceService) { }
  ngOnInit(): void {
  }

  openRegistrationDialog() {
    const dialogRef = this.dialog.open(UserRegistrationComponent, {
      width: '100%',
      height: '100%',
      data: {
        title: 'Register'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== null) {
        this.userService.saveUserProfile(result).subscribe((response: any) => {
          console.log('saveResponse', response);
          this.userService.setUserId(response.id);
          this.router.navigateByUrl('/profile');
        });
      }
    });
  }
}


 
