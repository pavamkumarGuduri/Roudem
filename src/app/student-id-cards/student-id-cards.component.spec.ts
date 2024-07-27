import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIdCardsComponent } from './student-id-cards.component';

describe('StudentIdCardsComponent', () => {
  let component: StudentIdCardsComponent;
  let fixture: ComponentFixture<StudentIdCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentIdCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentIdCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
