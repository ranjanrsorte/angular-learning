import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-function-example',
  templateUrl: './function-example.component.html',
  styleUrls: ['./function-example.component.css']
})
export class FunctionExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'blog-events-exp';
  getValue() {
    alert('Hello World');
  };

  getStringValue(name:string) {
    alert(name);
  }

  getNumberValue(num:number) {
    alert(num);
  }

  getStringOrNumberValue(name: string | number) {
    alert(name);
  }

  getAnyValue(name: any) {
    alert (name);
  }

}
