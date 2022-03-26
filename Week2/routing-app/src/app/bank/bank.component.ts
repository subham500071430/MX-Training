import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

    bal: number = 0
    curr_bal: number = 0

  constructor() { }

  ngOnInit(): void {
  }
    

    openAccount(){
    var Amount= this.bal;
     this.curr_bal = Amount
     alert(Amount)
    }

    Withdraw(){


      var balanceAmt = this.curr_bal-this.bal
     
      if(this.bal == 0){
             alert("Enter Amount")
         }
      else if(this.bal > this.curr_bal){
          alert('Insufficient Balance');
         }
         else{
          this.curr_bal=balanceAmt;
          this.bal=0;
         }
     
     }
     Deposit(){
      var totalBalance=this.curr_bal;
      var Amount=this.bal;
      var balanceAmt = totalBalance+Amount;
      if(Amount == 0){
             alert("Enter Amount")
         }
         else{
          this.curr_bal=balanceAmt;
          this.bal=0
         }
     }
     
     }


