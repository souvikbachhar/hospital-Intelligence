import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintPatientRegistrationComponent } from './print-patient-registration.component';

describe('PrintPatientRegistrationComponent', () => {
  let component: PrintPatientRegistrationComponent;
  let fixture: ComponentFixture<PrintPatientRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintPatientRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintPatientRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
