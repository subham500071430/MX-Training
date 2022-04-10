import {savingsAccount} from './savings'
import {currentAccount} from './currentAccount'

class transaction{
    
   
        operation(){
        var obj1 = new savingsAccount()
        var obj2 = new currentAccount()
        obj1.openAccount(2000)
        obj1.deposit(3000)
        obj1.showBalance()
        }

}

var obj3 = new transaction()
obj3.operation()