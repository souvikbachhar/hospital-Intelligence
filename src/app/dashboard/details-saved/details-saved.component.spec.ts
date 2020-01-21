import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSavedComponent } from './details-saved.component';

describe('DetailsSavedComponent', () => {
  let component: DetailsSavedComponent;
  let fixture: ComponentFixture<DetailsSavedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsSavedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
