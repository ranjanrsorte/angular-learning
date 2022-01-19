import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-input-value-exp',
  templateUrl: './get-input-value-exp.component.html',
  styleUrls: ['./get-input-value-exp.component.css']
})
export class GetInputValueExpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Get Input Box Value';
  displayValue = "";
  displayValueByClick = "";
  getValue(val:string) {
    this.displayValue = val;
  }

  displayClickValue(val:string){
    this.displayValueByClick = val;
  }
}
