import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'study-and-learning';
  /* Below code is written for Parent to Child data communication */
  /*
  data = 0;
  updateData() {
    this.data = Math.floor(Math.random()*10);
  }
  */

  /* Below code is written for Child to Parent data communication */
  data = "x";
  updateData(item:string) {
    console.warn(item);
    this.data = item;
  }

  /* Below code is written for Reusable component example */
  /*
  userDetails = [
    {name: 'ranjan', email: 'ranjan@test.com'},
    {name: 'sam', email: 'sam@test.com'},
    {name: 'peter', email: 'peter@test.com'},
    {name: 'bruce', email: 'bruce@test.com'}
  ];
  */
}
