import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineHtmlEmpComponent } from './inline-html-emp.component';

describe('InlineHtmlEmpComponent', () => {
  let component: InlineHtmlEmpComponent;
  let fixture: ComponentFixture<InlineHtmlEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineHtmlEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineHtmlEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
