import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentIdsComponent } from './create-student-ids.component';

describe('CreateStudentIdsComponent', () => {
  let component: CreateStudentIdsComponent;
  let fixture: ComponentFixture<CreateStudentIdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStudentIdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStudentIdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
