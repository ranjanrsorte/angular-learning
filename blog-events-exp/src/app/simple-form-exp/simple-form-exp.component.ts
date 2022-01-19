import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simple-form-exp',
  templateUrl: './simple-form-exp.component.html',
  styleUrls: ['./simple-form-exp.component.css']
})
export class SimpleFormExpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Simple Form Example'
  userData:any = {};
  getData(data:NgForm) {
    this.userData = data;
  }
}
