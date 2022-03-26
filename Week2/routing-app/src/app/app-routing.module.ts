import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankComponent } from './bank/bank.component';
import { EmiComponent } from './emi/emi.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path:'bank',component: BankComponent},
  {path:'form',component: FormComponent},
  {path:'emi', component: EmiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
