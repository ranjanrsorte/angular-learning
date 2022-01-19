import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFormExpComponent } from './simple-form-exp.component';

describe('SimpleFormExpComponent', () => {
  let component: SimpleFormExpComponent;
  let fixture: ComponentFixture<SimpleFormExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleFormExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFormExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
