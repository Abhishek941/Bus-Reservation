import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hmseat1Component } from './hmseat1.component';

describe('Hmseat1Component', () => {
  let component: Hmseat1Component;
  let fixture: ComponentFixture<Hmseat1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hmseat1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hmseat1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
