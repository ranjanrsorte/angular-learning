import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-html-css-exp',
  template: `
    <h2 class="custom">
      inline-html-css-exp works!
    </h2>
  `,
  styles: [
    `.custom {
      color: green;
    }`
  ]
})
export class InlineHtmlCssExpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
