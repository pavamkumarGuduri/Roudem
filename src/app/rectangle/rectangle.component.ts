import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {

  public length: number =0;
  public breadth:number=0;
  public result:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  Area(){
    this.result=this.length * this.breadth;
  }

  Parameter(){
    this.result=2*this.length * this.breadth;
  }

}
