import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBindingExpComponent } from './two-way-binding-exp.component';

describe('TwoWayBindingExpComponent', () => {
  let component: TwoWayBindingExpComponent;
  let fixture: ComponentFixture<TwoWayBindingExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayBindingExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayBindingExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
