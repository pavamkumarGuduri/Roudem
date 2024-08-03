import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentItemsComponent } from './parent-items.component';

describe('ParentItemsComponent', () => {
  let component: ParentItemsComponent;
  let fixture: ComponentFixture<ParentItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
