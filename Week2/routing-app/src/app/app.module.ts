import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankComponent } from './bank/bank.component';
import { FormComponent } from './form/form.component';
import { EmiComponent } from './emi/emi.component';
import { FormsModule } from '@angular/forms';
import { CreditComponent } from './credit/credit.component';


@NgModule({
  declarations: [
    AppComponent,
    BankComponent,
    FormComponent,
    EmiComponent,
    CreditComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
