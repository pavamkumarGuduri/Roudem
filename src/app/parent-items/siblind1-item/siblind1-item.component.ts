import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommonItemsService } from 'src/app/common-items.service';

@Component({
  selector: 'app-siblind1-item',
  templateUrl: './siblind1-item.component.html',
  styleUrls: ['./siblind1-item.component.css']
})
export class Siblind1ItemComponent implements OnInit {

  public value:number=0;
  
  constructor( private _commonItemsService:CommonItemsService) 
  {
  }
  ngOnInit(): void {
    this._commonItemsService.currentValue.subscribe(value => this.value = value);

  }


  increaseValue() {
    this._commonItemsService.increaseValue();
  }
}
