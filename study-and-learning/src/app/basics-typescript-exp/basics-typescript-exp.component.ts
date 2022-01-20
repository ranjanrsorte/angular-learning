import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics-typescript-exp',
  templateUrl: './basics-typescript-exp.component.html',
  styleUrls: ['./basics-typescript-exp.component.css']
})
export class BasicsTypescriptExpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = "Basic of TypeScript";
  data:number | string = 20;

  getData() {
    this.data = "hello"
  }
}
