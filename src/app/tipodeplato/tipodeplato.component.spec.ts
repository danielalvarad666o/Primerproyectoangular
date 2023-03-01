import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipodeplatoComponent } from './tipodeplato.component';

describe('TipodeplatoComponent', () => {
  let component: TipodeplatoComponent;
  let fixture: ComponentFixture<TipodeplatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipodeplatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipodeplatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
