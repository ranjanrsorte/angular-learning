import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-html-emp',
  template: `
    <p class="custom">
      inline-html-emp works!
    </p>
  `,
  styleUrls: ['./inline-html-emp.component.css']
})
export class InlineHtmlEmpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
