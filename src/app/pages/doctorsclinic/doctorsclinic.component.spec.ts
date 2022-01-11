import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsclinicComponent } from './doctorsclinic.component';

describe('DoctorsclinicComponent', () => {
  let component: DoctorsclinicComponent;
  let fixture: ComponentFixture<DoctorsclinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsclinicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsclinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
