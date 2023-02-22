import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerodeverificacionComponent } from './numerodeverificacion.component';

describe('NumerodeverificacionComponent', () => {
  let component: NumerodeverificacionComponent;
  let fixture: ComponentFixture<NumerodeverificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerodeverificacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumerodeverificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
