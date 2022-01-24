import { Component, OnInit } from '@angular/core';
import {UserdataService} from './../services/userdata.service';

@Component({
  selector: 'app-footer-comp',
  templateUrl: './footer-comp.component.html',
  styleUrls: ['./footer-comp.component.css']
})
export class FooterCompComponent implements OnInit {

  users:any;
  constructor(private userData: UserdataService){
    console.warn(userData.users());
    this.users = userData.users();
  }

  ngOnInit(): void {
  }

}
