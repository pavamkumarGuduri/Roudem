import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesChatComponent } from './employees-chat.component';

describe('EmployeesChatComponent', () => {
  let component: EmployeesChatComponent;
  let fixture: ComponentFixture<EmployeesChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
