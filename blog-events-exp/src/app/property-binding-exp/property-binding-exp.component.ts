import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding-exp',
  templateUrl: './property-binding-exp.component.html',
  styleUrls: ['./property-binding-exp.component.css']
})
export class PropertyBindingExpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Property Binding Example';
  name='Ranjan';
  disable = false;
}
