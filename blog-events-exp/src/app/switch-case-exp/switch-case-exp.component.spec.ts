import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCaseExpComponent } from './switch-case-exp.component';

describe('SwitchCaseExpComponent', () => {
  let component: SwitchCaseExpComponent;
  let fixture: ComponentFixture<SwitchCaseExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchCaseExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchCaseExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
