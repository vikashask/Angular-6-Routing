import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { RouterModule, Routes } from '@angular/router';

const userRoutes:Routes = [
  {path : '',component:UserComponent},
  {path:'profile',component:ProfileComponent,pathMatch:'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [ProfileComponent, UserComponent]
})
export class UserModule { }
