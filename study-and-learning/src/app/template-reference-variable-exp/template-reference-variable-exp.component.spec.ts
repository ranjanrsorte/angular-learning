import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferenceVariableExpComponent } from './template-reference-variable-exp.component';

describe('TemplateReferenceVariableExpComponent', () => {
  let component: TemplateReferenceVariableExpComponent;
  let fixture: ComponentFixture<TemplateReferenceVariableExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateReferenceVariableExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateReferenceVariableExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
