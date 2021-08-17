import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempGraficaComponent } from './temp-grafica.component';

describe('TempGraficaComponent', () => {
  let component: TempGraficaComponent;
  let fixture: ComponentFixture<TempGraficaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempGraficaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempGraficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
