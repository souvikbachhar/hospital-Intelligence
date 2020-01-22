import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientHospitalVisitDetailsComponent } from './patient-hospital-visit-details.component';

describe('PatientHospitalVisitDetailsComponent', () => {
  let component: PatientHospitalVisitDetailsComponent;
  let fixture: ComponentFixture<PatientHospitalVisitDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientHospitalVisitDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientHospitalVisitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
