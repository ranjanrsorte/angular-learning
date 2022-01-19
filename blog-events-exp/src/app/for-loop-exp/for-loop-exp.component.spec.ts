import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForLoopExpComponent } from './for-loop-exp.component';

describe('ForLoopExpComponent', () => {
  let component: ForLoopExpComponent;
  let fixture: ComponentFixture<ForLoopExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForLoopExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForLoopExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
