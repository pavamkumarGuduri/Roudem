import { Component, OnInit} from '@angular/core';
import { CommonItemsService } from 'src/app/common-items.service';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css']
})
export class ChildItemComponent implements OnInit {

public value:number=0;
  constructor( private _commonItemsService:CommonItemsService) {
 
   }

  ngOnInit():void {
    this._commonItemsService.currentValue.subscribe(value => this.value = value);
  }
  
  increaseValue() {
    this._commonItemsService.increaseValue();
  }

  }