import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding-exp',
  templateUrl: './style-binding-exp.component.html',
  styleUrls: ['./style-binding-exp.component.css']
})
export class StyleBindingExpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Style Binding Example'
  exampletext = 'Style'
  color = 'red'
  bgColor = 'pink'
  updateColor (val:string) {
    this.color = val
    this.bgColor = 'black'
  }
}
