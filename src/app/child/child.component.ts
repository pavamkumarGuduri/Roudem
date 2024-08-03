import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public ac:string="cjwodwo";
// event create
@Output() public bEvent:EventEmitter<any>=new EventEmitter();
 
  public bc:string="";
  constructor() { }

  ngOnInit(): void {
  }

  send(){
    //event emit
    this.bEvent.emit(this.bc);
  }


}
