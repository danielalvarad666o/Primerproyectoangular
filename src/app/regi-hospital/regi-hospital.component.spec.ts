import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiHospitalComponent } from './regi-hospital.component';

describe('RegiHospitalComponent', () => {
  let component: RegiHospitalComponent;
  let fixture: ComponentFixture<RegiHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegiHospitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegiHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
