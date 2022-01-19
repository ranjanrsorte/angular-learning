import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseExpComponent } from './if-else-exp.component';

describe('IfElseExpComponent', () => {
  let component: IfElseExpComponent;
  let fixture: ComponentFixture<IfElseExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfElseExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfElseExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
