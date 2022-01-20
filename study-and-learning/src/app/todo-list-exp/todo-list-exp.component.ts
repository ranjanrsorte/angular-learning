import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list-exp',
  templateUrl: './todo-list-exp.component.html',
  styleUrls: ['./todo-list-exp.component.css']
})
export class TodoListExpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'ToDo List App';
  list:any[] = [];
  addTask(item:string) {
    this.list.push({id:this.list.length, name:item});
  }
  removeTask(id:number) {
    this.list = this.list.filter(item=>item.id!==id);
  }
}
