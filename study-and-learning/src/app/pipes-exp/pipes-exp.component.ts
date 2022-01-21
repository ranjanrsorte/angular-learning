import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-exp',
  templateUrl: './pipes-exp.component.html',
  styleUrls: ['./pipes-exp.component.css']
})
export class PipesExpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = "angular basic Pipes"
  today = Date();
  user = {
    name:'ranjan sorte', age: 25
  }
}
