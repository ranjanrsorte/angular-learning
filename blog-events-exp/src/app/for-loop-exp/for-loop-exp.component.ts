import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-loop-exp',
  templateUrl: './for-loop-exp.component.html',
  styleUrls: ['./for-loop-exp.component.css']
})
export class ForLoopExpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'For Loop Example';
  users = ['Ranjan', 'Peter', 'Bruce', 'Sony', 'Sam'];
  userDetails = [
    {name:'Ranjan', email:'ranjan@test.com', phone: '1111'},
    {name:'Peter', email:'Peter@test.com', phone: '2222'},
    {name:'Bruce', email:'Bruce@test.com', phone: '3333'},
    {name:'Sony', email:'Sony@test.com', phone: '4444'},
    {name:'Sam', email:'Sam@test.com', phone: '5555'}
  ];

  nestedlooptitle = 'Nested For Loop Example'
  data = [
    {name:'Ranjan', email:'ranjan@test.com', phone: '1111', accounts:['facebook', 'gmail', 'linkedIn']},
    {name:'Peter', email:'Peter@test.com', phone: '2222', accounts:['facebook', 'instagram', 'linkedIn']},
    {name:'Bruce', email:'Bruce@test.com', phone: '3333', accounts:['facebook', 'twitter', 'linkedIn']},
    {name:'Sony', email:'Sony@test.com', phone: '4444', accounts:['yahoo', 'gmail', 'linkedIn']},
    {name:'Sam', email:'Sam@test.com', phone: '5555', accounts:['snapchat', 'gmail', 'linkedIn']}
  ]
}
