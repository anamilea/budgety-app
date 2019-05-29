import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedinLoginProvider,
} from "angular-6-social-login";
import { LoginComponent } from './auth/login/login.component';
import { ExpenseComponent } from './expense/expense.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { IncomeComponent } from './income/income.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ReportsComponent } from './reports/reports.component';
import { MatCardModule } from '@angular/material';
import { EconomiesComponent } from './economies/economies.component';
import { ExpenseActionsRendererComponent } from './expense/expense-actions-renderer/expense-actions-renderer.component';
import { CreateExpenseComponent } from './expense/create-expense/create-expense.component';
import { DeleteExpenseComponent } from './expense/delete-expense/delete-expense.component';
import { EditExpenseComponent } from './expense/edit-expense/edit-expense.component';
import { AgGridModule } from 'ag-grid-angular';
import { ExpenseService } from './expense/expense.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SnotifyModule, ToastDefaults, SnotifyService } from 'ng-snotify';



// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("Your-Facebook-app-id")
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("Your-Google-Client-Id")
      },
      {
        id: LinkedinLoginProvider.PROVIDER_ID,
        provider: new LinkedinLoginProvider("1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com")
      },
    ]);
  return config;
}
//lalala
@NgModule({
  entryComponents:[
    CreateExpenseComponent
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
    ReportsComponent,
    EconomiesComponent,
    ExpenseActionsRendererComponent,
    CreateExpenseComponent,
    DeleteExpenseComponent,
    EditExpenseComponent
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
    SocialLoginModule,
    AppRoutingModule,
    AgGridModule.withComponents([ExpenseActionsRendererComponent])
  ],
  providers: [
    ExpenseService,
    SnotifyService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    { 
      provide: 'SnotifyToastConfig', useValue: ToastDefaults
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
