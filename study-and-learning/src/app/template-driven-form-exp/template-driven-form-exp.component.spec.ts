import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormExpComponent } from './template-driven-form-exp.component';

describe('TemplateDrivenFormExpComponent', () => {
  let component: TemplateDrivenFormExpComponent;
  let fixture: ComponentFixture<TemplateDrivenFormExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
