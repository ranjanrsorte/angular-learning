import { Component } from '@angular/core';
import { UsersdataService } from './services/usersdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-http-api';
  users:any;
  constructor(private userdata:UsersdataService){
    this.userdata.users().subscribe((data)=>{
      this.users = data;
    })
  }
}
