import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBaseComponent } from './info-base.component';

describe('InfoBaseComponent', () => {
  let component: InfoBaseComponent;
  let fixture: ComponentFixture<InfoBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
