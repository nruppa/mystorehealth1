import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {


  login: any
  selected: any
  formdata: any;
  formData: any = {};
  constructor(private fb: FormBuilder ) { }
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
    // this.test.esvsdata.next(data)
  }

}
