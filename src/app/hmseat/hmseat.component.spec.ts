import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmseatComponent } from './hmseat.component';

describe('HmseatComponent', () => {
  let component: HmseatComponent;
  let fixture: ComponentFixture<HmseatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HmseatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HmseatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
