import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChseatComponent } from './chseat.component';

describe('ChseatComponent', () => {
  let component: ChseatComponent;
  let fixture: ComponentFixture<ChseatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChseatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChseatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
