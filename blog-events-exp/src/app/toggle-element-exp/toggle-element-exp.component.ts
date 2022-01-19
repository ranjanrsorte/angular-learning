import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-element-exp',
  templateUrl: './toggle-element-exp.component.html',
  styleUrls: ['./toggle-element-exp.component.css']
})
export class ToggleElementExpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Toggle Element Example'
  display = true
  toggle(){
    this.display = !this.display;
  }
}
