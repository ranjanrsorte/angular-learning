import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-exp',
  templateUrl: './events-exp.component.html',
  styleUrls: ['./events-exp.component.css']
})
export class EventsExpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getData() {
    console.warn("hello data");
  }

  getStringData(val:string) {
    console.warn(val);
  }

  getDataFromInput(val:string) {
    console.warn(val);
  }

}
