import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sibling3ItemComponent } from './sibling3-item.component';

describe('Sibling3ItemComponent', () => {
  let component: Sibling3ItemComponent;
  let fixture: ComponentFixture<Sibling3ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sibling3ItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sibling3ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
