import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {
  
  salary = 0
  a = 10
  b = 20

  c = this.a+this.b
  constructor() { }

  ngOnInit(): void {
  }

}
