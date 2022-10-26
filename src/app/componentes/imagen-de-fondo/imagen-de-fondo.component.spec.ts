import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenDeFondoComponent } from './imagen-de-fondo.component';

describe('ImagenDeFondoComponent', () => {
  let component: ImagenDeFondoComponent;
  let fixture: ComponentFixture<ImagenDeFondoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenDeFondoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenDeFondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
