import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form-exp',
  templateUrl: './template-driven-form-exp.component.html',
  styleUrls: ['./template-driven-form-exp.component.css']
})
export class TemplateDrivenFormExpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = "Example for Template Driven Forms"
  loginUser(item:any){
    console.warn(item);
  }
}
