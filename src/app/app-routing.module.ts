import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { UserDetails } from './user-registration/user-details';

const routes: Routes = [{
  path: 'profile',
  component: ProfileDetailsComponent
},
{

  path: '',
  component: HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
