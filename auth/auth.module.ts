import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageModule } from './Login/Login.module';
import { RegisterPageModule } from './register/register.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginPageModule,
    RegisterPageModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
