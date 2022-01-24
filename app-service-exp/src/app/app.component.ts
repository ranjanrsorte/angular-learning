import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-service-exp';
  users:any;
  constructor(private userData: UserdataService){
    console.warn(userData.users());
    this.users = userData.users();
  }
}
