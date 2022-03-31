import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chseat1Component } from './chseat1.component';

describe('Chseat1Component', () => {
  let component: Chseat1Component;
  let fixture: ComponentFixture<Chseat1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chseat1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chseat1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
