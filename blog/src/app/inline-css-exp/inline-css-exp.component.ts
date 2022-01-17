import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-css-exp',
  templateUrl: './inline-css-exp.component.html',
  styles: [
    `.custom {
      color: red;
    }`
  ]
})
export class InlineCssExpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
