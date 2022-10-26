import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraBotonesComponent } from './barra-botones.component';

describe('BarraBotonesComponent', () => {
  let component: BarraBotonesComponent;
  let fixture: ComponentFixture<BarraBotonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraBotonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraBotonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
