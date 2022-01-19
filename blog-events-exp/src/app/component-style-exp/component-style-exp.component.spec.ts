import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentStyleExpComponent } from './component-style-exp.component';

describe('ComponentStyleExpComponent', () => {
  let component: ComponentStyleExpComponent;
  let fixture: ComponentFixture<ComponentStyleExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentStyleExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentStyleExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
