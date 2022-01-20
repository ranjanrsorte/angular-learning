import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding-exp',
  templateUrl: './two-way-binding-exp.component.html',
  styleUrls: ['./two-way-binding-exp.component.css']
})
export class TwoWayBindingExpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = "Two Way Binding Example";
  data:any;
}
