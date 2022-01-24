import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-exp',
  templateUrl: './directive-exp.component.html',
  styleUrls: ['./directive-exp.component.css']
})
export class DirectiveExpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = "Directive Example"
}
