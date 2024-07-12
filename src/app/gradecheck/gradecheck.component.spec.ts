import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradecheckComponent } from './gradecheck.component';

describe('GradecheckComponent', () => {
  let component: GradecheckComponent;
  let fixture: ComponentFixture<GradecheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradecheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradecheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
