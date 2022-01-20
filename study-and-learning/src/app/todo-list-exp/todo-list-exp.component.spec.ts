import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListExpComponent } from './todo-list-exp.component';

describe('TodoListExpComponent', () => {
  let component: TodoListExpComponent;
  let fixture: ComponentFixture<TodoListExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
