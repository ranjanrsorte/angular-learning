import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleBindingExpComponent } from './style-binding-exp.component';

describe('StyleBindingExpComponent', () => {
  let component: StyleBindingExpComponent;
  let fixture: ComponentFixture<StyleBindingExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleBindingExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleBindingExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
