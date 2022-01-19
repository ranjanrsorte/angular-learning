import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBindingExpComponent } from './property-binding-exp.component';

describe('PropertyBindingExpComponent', () => {
  let component: PropertyBindingExpComponent;
  let fixture: ComponentFixture<PropertyBindingExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyBindingExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBindingExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
