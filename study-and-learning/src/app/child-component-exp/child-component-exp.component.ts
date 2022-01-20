import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component-exp',
  templateUrl: './child-component-exp.component.html',
  styleUrls: ['./child-component-exp.component.css']
})
export class ChildComponentExpComponent implements OnInit {

  constructor() { }
  /* For Parent to Child communication */
  /* 
  @Input() item=0;
  */
  /* For Child to Parent communication */
  @Output() updateDataEvent = new EventEmitter<string>();
  ngOnInit(): void {
  }
  title = "Child Component"
}
