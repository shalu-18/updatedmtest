import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetails } from '../user-registration/user-details';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';
import { UserServiceService } from '../user-service.service';

export class EditProfileOption {
  static EDIT_PHOTO: number = 1;
  static EDIT_PROFILE: number = 2;
}

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  userData?: UserDetails;

  constructor(public dialog: MatDialog, public router: Router, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userService.getUserProfile(this.userService.createdUserId).subscribe(response => {
      this.userData = response;
    });
  }

  editProfile(editChoice: number) {
    const dialogRef = this.dialog.open(UserRegistrationComponent, {
      width: '100%',
      height: '100%',
      data: {
        title: editChoice === EditProfileOption.EDIT_PROFILE ? 'Edit Profile' : 'Edit Photo',
        userData: this.userData

      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.userService.updateUserProfile(result, this.userService.createdUserId).subscribe(response => {
        console.log('updateResponse::', response);
        this.userService.getUserProfile(this.userService.createdUserId).subscribe(response => {
          this.userData = response;
        });
      })
      
    });
  }


}
