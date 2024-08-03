
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent  implements  OnInit{

  public num1: number =0;
  public num2:number=0;
  public result:number=0;
  Catch(value:number){
    this.result=value;
  }
  constructor() { }

  

  ngOnInit(): void {
  }

}
