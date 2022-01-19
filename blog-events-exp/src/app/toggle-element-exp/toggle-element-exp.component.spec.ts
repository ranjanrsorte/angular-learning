import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleElementExpComponent } from './toggle-element-exp.component';

describe('ToggleElementExpComponent', () => {
  let component: ToggleElementExpComponent;
  let fixture: ComponentFixture<ToggleElementExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleElementExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleElementExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
