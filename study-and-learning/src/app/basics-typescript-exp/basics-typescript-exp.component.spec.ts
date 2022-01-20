import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsTypescriptExpComponent } from './basics-typescript-exp.component';

describe('BasicsTypescriptExpComponent', () => {
  let component: BasicsTypescriptExpComponent;
  let fixture: ComponentFixture<BasicsTypescriptExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicsTypescriptExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicsTypescriptExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
