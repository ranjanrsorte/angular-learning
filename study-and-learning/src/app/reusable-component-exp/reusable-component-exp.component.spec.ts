import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableComponentExpComponent } from './reusable-component-exp.component';

describe('ReusableComponentExpComponent', () => {
  let component: ReusableComponentExpComponent;
  let fixture: ComponentFixture<ReusableComponentExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableComponentExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableComponentExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
