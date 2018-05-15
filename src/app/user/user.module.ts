import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProfileComponent, UserComponent]
})
export class UserModule { }
