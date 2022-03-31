import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

    bal: any 
    curr_bal: any

  constructor() { }

  ngOnInit(): void {
  }
    

    openAccount(){

    var Amount= this.bal;
    
    if(Amount='')
    {
      alert("Enter amount")
    }
    else if(Amount<1000)
    {
      alert("Minimum 1000 needed to open account")
    }
    else
    {
       this.curr_bal = Amount
    }
     
    }

    Withdraw(){


      var balanceAmt = this.curr_bal-this.bal
     
      if(this.bal == ''){
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


