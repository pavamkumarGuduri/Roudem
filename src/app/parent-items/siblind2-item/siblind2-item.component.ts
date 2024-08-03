import { Component, OnInit } from '@angular/core';
import { CommonItemsService } from 'src/app/common-items.service';

@Component({
  selector: 'app-siblind2-item',
  templateUrl: './siblind2-item.component.html',
  styleUrls: ['./siblind2-item.component.css']
})
export class Siblind2ItemComponent implements OnInit {

   public value:number=0;
  constructor(private _commonItemsService:CommonItemsService) { }

  ngOnInit(): void {
    this._commonItemsService.currentValue.subscribe(value => this.value = value);

  }
  increaseValue() {
    this._commonItemsService.increaseValue();
  }
}
