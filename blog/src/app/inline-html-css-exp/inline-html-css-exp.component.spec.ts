import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineHtmlCssExpComponent } from './inline-html-css-exp.component';

describe('InlineHtmlCssExpComponent', () => {
  let component: InlineHtmlCssExpComponent;
  let fixture: ComponentFixture<InlineHtmlCssExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineHtmlCssExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineHtmlCssExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
