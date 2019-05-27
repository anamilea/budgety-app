import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomepageComponent} from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ExpenseComponent } from './expense/expense.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'expense', component: ExpenseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
