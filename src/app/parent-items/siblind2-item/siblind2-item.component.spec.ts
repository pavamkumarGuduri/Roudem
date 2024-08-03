import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Siblind2ItemComponent } from './siblind2-item.component';

describe('Siblind2ItemComponent', () => {
  let component: Siblind2ItemComponent;
  let fixture: ComponentFixture<Siblind2ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Siblind2ItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Siblind2ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
