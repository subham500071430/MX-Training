import {transaction} from './bankInterface'

export class currentAccount implements transaction
{   
     balance : number

     openAccount(amt) {
         this.balance = amt
         console.log("account created with amount "+this.balance)
     }

     withdraw(amt) {
         if(amt>this.balance)
         {
             console.log("insufficient balance")
         }
         else
         {
            this.balance = this.balance-amt
            console.log("withdrawn successfully")
         }
        
     }

     deposit(amt) {
          
        this.balance +=amt

        console.log("deposited successfully")
     } 
     showBalance() {
         console.log(this.balance)
     }
    
}