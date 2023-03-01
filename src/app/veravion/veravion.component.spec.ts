import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeravionComponent } from './veravion.component';

describe('VeravionComponent', () => {
  let component: VeravionComponent;
  let fixture: ComponentFixture<VeravionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeravionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeravionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
