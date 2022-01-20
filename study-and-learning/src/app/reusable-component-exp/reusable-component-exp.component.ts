import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reusable-component-exp',
  templateUrl: './reusable-component-exp.component.html',
  styleUrls: ['./reusable-component-exp.component.css']
})
export class ReusableComponentExpComponent implements OnInit {

  constructor() { }
  @Input() item:{name:string,email:string} ={name:'',email:''}; 
  ngOnInit(): void {
  }
  title = 'Reusable Component Example'

}
