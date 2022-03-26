import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent implements OnInit {
   
  amount: any = '';
  rate: any = 0;
  tenure: any = 0;
  emi: any = 0;

  constructor() { 
    
  }
   
  calculate()
  {  
     this.rate = this.rate/1200
     let p = Math.pow((1+this.rate),this.tenure)
     let q = p/(p-1)

     this.emi = this.amount*this.rate*q
  }

  ngOnInit(): void {
  }


}
