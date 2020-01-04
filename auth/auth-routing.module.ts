import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Login',
    pathMatch: 'full'
  },
  {
    path: 'Login',
    loadChildren: './Login/Login.module#LoginPageModule'
  },  { path: 'register',
    loadChildren: './register/register.module#RegisterPageModule'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
