import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-exp',
  templateUrl: './reactive-form-exp.component.html',
  styleUrls: ['./reactive-form-exp.component.css']
})
export class ReactiveFormExpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Reactive Form Example';
  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });
  loginuser() {
    console.warn(this.loginForm.value);
  }

  get user(){
    return this.loginForm.get('user');
  }

  get name() {
    return this.loginForm.get('name');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
