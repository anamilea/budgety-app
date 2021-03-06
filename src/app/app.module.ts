import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HighchartsChartModule } from 'highcharts-angular';
import { LoginComponent } from './auth/login/login.component';
import { ExpenseComponent } from './expense/expense.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { IncomeComponent } from './income/income.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ExpenseActionsRendererComponent } from './expense/expense-actions-renderer/expense-actions-renderer.component';
import { CreateExpenseComponent } from './expense/create-expense/create-expense.component';
import { DeleteExpenseComponent } from './expense/delete-expense/delete-expense.component';
import { EditExpenseComponent } from './expense/edit-expense/edit-expense.component';
import { AgGridModule } from 'ag-grid-angular';
import { ExpenseService } from './expense/expense.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { SnotifyModule, ToastDefaults, SnotifyService } from 'ng-snotify';
import { AuthService } from './auth/auth.service';
import { CreateIncomeComponent } from './income/create-income/create-income.component';
import { DeleteIncomeComponent } from './income/delete-income/delete-income.component';
import { EditIncomeComponent } from './income/edit-income/edit-income.component';
import { IncomeActionsRendererComponent } from './income/income-actions-renderer/income-actions-renderer.component';
import { CreateInvoiceComponent } from './invoice/create-invoice/create-invoice.component';
import { DeleteInvoiceComponent } from './invoice/delete-invoice/delete-invoice.component';
import { EditInvoiceComponent } from './invoice/edit-invoice/edit-invoice.component';
import { InvoiceActionsRendererComponent } from './invoice/invoice-actions-renderer/invoice-actions-renderer.component';
import { InvoiceService } from './invoice/invoice.service';
import { IncomeService } from './income/income.service';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  entryComponents: [
    CreateExpenseComponent,
    EditExpenseComponent,
    DeleteExpenseComponent,
    CreateIncomeComponent,
    EditIncomeComponent,
    DeleteIncomeComponent,
    CreateInvoiceComponent,
    EditInvoiceComponent,
    DeleteInvoiceComponent
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    ExpenseComponent,
    HomepageComponent,
    HeaderComponent,
    SignupComponent,
    SidenavComponent,
    IncomeComponent,
    InvoiceComponent,
    ExpenseActionsRendererComponent,
    CreateExpenseComponent,
    DeleteExpenseComponent,
    EditExpenseComponent,
    CreateIncomeComponent,
    DeleteIncomeComponent,
    EditIncomeComponent,
    IncomeActionsRendererComponent,
    CreateInvoiceComponent,
    DeleteInvoiceComponent,
    EditInvoiceComponent,
    InvoiceActionsRendererComponent,
    ErrorPageComponent
  ],
  imports: [
BrowserModule,
BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    SnotifyModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HighchartsChartModule,
    AppRoutingModule,
    AgGridModule.withComponents([ExpenseActionsRendererComponent,
      IncomeActionsRendererComponent, InvoiceActionsRendererComponent])
  ],
  providers: [
    ExpenseService,
    InvoiceService,
    IncomeService,
    SnotifyService,
    AuthService,
    DatePipe,
    {
      provide: 'SnotifyToastConfig', useValue: ToastDefaults
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
