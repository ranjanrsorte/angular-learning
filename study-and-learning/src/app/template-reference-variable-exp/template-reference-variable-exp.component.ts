import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable-exp',
  templateUrl: './template-reference-variable-exp.component.html',
  styleUrls: ['./template-reference-variable-exp.component.css']
})
export class TemplateReferenceVariableExpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = "Template Reference Variable Example"
  getVal(item:any) {
    console.warn(item);
  }
}
