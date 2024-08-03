import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Siblind1ItemComponent } from './siblind1-item.component';

describe('Siblind1ItemComponent', () => {
  let component: Siblind1ItemComponent;
  let fixture: ComponentFixture<Siblind1ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Siblind1ItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Siblind1ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
