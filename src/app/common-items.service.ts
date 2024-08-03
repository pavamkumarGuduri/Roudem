import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonItemsService {


   private valueSource = new BehaviorSubject<number>(0);
  currentValue = this.valueSource.asObservable();

  constructor() { }

  increaseValue() {
    this.valueSource.next(this.valueSource.value + 1);
  }
}
