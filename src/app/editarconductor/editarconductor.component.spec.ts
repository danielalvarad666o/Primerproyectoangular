import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarconductorComponent } from './editarconductor.component';

describe('EditarconductorComponent', () => {
  let component: EditarconductorComponent;
  let fixture: ComponentFixture<EditarconductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarconductorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarconductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
