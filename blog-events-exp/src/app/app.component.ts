import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
