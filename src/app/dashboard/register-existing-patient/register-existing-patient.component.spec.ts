import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterExistingPatientComponent } from './register-existing-patient.component';

describe('RegisterExistingPatientComponent', () => {
  let component: RegisterExistingPatientComponent;
  let fixture: ComponentFixture<RegisterExistingPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterExistingPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterExistingPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
