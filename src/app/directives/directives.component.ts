import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  public ages:number []=[10,20,30,50,60];
public states:string[]=['andhrapradesh','telangana','behar','madyapradesh'];

public products:any=[
{name:'pen',price:20,rating:5},
{name:'choclet',price:60,rating:3},
{name:'pepsi',price:10,rating:4},
{name:'thumsup',price:100,rating:3},
{name:'x90',price:160,rating:5},
]
  constructor() { }

  ngOnInit(): void {
  }

}
