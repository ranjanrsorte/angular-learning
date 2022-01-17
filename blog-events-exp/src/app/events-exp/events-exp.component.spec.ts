import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsExpComponent } from './events-exp.component';

describe('EventsExpComponent', () => {
  let component: EventsExpComponent;
  let fixture: ComponentFixture<EventsExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
