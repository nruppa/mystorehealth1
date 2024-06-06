import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any
  constructor(private fb: FormBuilder, private test: TestService, private route: Router) { }
  Id = "122"
  pswd = "1212"

  ngOnInit() {

    this.login = this.fb.group({
      'userId': '',
      'password': '',

    })
  }
  signin(x: any) {
    if (this.Id == x.userId && this.pswd == x.password) {
      this.test.page = true;
      this.route.navigateByUrl("/home")
    }
    else {
      this.test.page = false;
    }
  }
}