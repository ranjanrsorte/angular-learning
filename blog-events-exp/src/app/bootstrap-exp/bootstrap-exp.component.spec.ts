import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapExpComponent } from './bootstrap-exp.component';

describe('BootstrapExpComponent', () => {
  let component: BootstrapExpComponent;
  let fixture: ComponentFixture<BootstrapExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
