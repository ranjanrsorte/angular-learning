import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInputValueExpComponent } from './get-input-value-exp.component';

describe('GetInputValueExpComponent', () => {
  let component: GetInputValueExpComponent;
  let fixture: ComponentFixture<GetInputValueExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetInputValueExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetInputValueExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
