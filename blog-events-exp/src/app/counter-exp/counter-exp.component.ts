import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-exp',
  templateUrl: './counter-exp.component.html',
  styleUrls: ['./counter-exp.component.css']
})
export class CounterExpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Counter Example';
  count = 0;
  counter(type:string) {
    type === 'add' ? this.count++ : this.count--
  }

}
