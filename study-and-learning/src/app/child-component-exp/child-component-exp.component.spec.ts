import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponentExpComponent } from './child-component-exp.component';

describe('ChildComponentExpComponent', () => {
  let component: ChildComponentExpComponent;
  let fixture: ComponentFixture<ChildComponentExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildComponentExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponentExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
