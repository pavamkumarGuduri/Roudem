import { Component, OnInit } from '@angular/core';
import { CommonItemsService } from 'src/app/common-items.service';

@Component({
  selector: 'app-sibling3-item',
  templateUrl: './sibling3-item.component.html',
  styleUrls: ['./sibling3-item.component.css']
})
export class Sibling3ItemComponent implements OnInit {

  public value:number=0;
  constructor(private _commonItemsService:CommonItemsService) { }

  ngOnInit(): void {
    this._commonItemsService.currentValue.subscribe(value => this.value = value);

  }
  increaseValue() {
    this._commonItemsService.increaseValue();
  }
}
