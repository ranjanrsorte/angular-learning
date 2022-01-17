import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineCssExpComponent } from './inline-css-exp.component';

describe('InlineCssExpComponent', () => {
  let component: InlineCssExpComponent;
  let fixture: ComponentFixture<InlineCssExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineCssExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineCssExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
