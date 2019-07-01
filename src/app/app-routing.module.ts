import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomepageComponent} from './homepage/homepage.component';
import { LoginComponent } from './auth/login/login.component';
import { ExpenseComponent } from './expense/expense.component';
import { SignupComponent } from './auth/signup/signup.component';
import { IncomeComponent } from './income/income.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ReportsComponent } from './reports/reports.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {path: 'success', component: HomepageComponent},
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'expenses', component: ExpenseComponent},
  {path: 'incomes', component: IncomeComponent},
  {path: 'invoices', component: InvoiceComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'error', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
