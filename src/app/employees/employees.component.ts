import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public employees:any=[
    {name:'pavan',age:25,dob:new Date("12/6/1998"),experience:3,package:10},
    {name:'kona',age:29,dob:new Date("2002, 2, 24"),experience:4,package:15},
    {name:'swamy',age:24,dob:new Date("1997, 1, 8"),experience:1,package:5},
    {name:'vasu',age:28,dob:new Date("1996, 7, 6"),experience:5,package:8},
    {name:'ram',age:85,dob:new Date("1994, 9, 29"),experience:7,package:25},
    {name:'dev',age:65,dob:new Date("1990, 12,3" ),experience:9,package:55},
    ]

public nlist:string="";
public nlists:string[]=[];

newitems:any={name1:'',price1:'',rating1:''};
items:any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  reg()
{
 if( this.nlist!=""){
  this.nlists.push(this.nlist.trim());
  this.nlist="";

 }
 }

 add(){
  if(this.newitems.name1 && this.newitems.price1 && this.newitems.rating1) {
    this.items.push({...this.newitems});
    this.newitems={ name1:'',price1:'',rating1:''};
  }
 }


}
