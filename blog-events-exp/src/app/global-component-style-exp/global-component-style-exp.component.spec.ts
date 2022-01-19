import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalComponentStyleExpComponent } from './global-component-style-exp.component';

describe('GlobalComponentStyleExpComponent', () => {
  let component: GlobalComponentStyleExpComponent;
  let fixture: ComponentFixture<GlobalComponentStyleExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalComponentStyleExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalComponentStyleExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
