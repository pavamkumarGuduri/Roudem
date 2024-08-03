import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

  @Input() public Onum1:number=0;
  @Input() public Onum2:number=0;
  constructor() { }

  @Output() public bEvent:EventEmitter<number>=new EventEmitter();
  ngOnInit(): void {
  }

  sum(){
    this.bEvent.emit(this.Onum1+this.Onum2)
  }

}
