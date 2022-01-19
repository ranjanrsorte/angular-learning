import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-else-exp',
  templateUrl: './if-else-exp.component.html',
  styleUrls: ['./if-else-exp.component.css']
})
export class IfElseExpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'If-Else example';
  show = false;
  showFromString = 'yes';

  color='blue';
}
