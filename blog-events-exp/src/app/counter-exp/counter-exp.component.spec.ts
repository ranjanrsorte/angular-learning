import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterExpComponent } from './counter-exp.component';

describe('CounterExpComponent', () => {
  let component: CounterExpComponent;
  let fixture: ComponentFixture<CounterExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
