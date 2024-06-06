import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TestService } from '../test.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  login: any
  selected: any
  formdata: any;
  constructor(private fb: FormBuilder, private test:TestService ) { }
  ngOnInit(): void {
    this.login = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9!@#\$%\^\&*_=+-]{6,12}')]],
      dateofbirth: ['', Validators.required],
      Address: ['', Validators.required],
      gender: ['', Validators.required],
      Selectanfield: ['', Validators.required],
    })
  }
  submit(data:any) {
    console.log(data)
    this.test.esvsdata.next(data)
  }

}
