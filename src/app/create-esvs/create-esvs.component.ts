import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TestService } from '../test.service';

@Component({
  selector: 'app-create-esvs',
  templateUrl: './create-esvs.component.html',
  styleUrls: ['./create-esvs.component.css']
})
export class CreateESVSComponent implements OnInit {

  login: any
  selected: any
  formdata: any;
  formData: any = {};
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
  submit() {
    // console.log(data)
    // this.test.esvsdata.next(data)
  }
  submit1(data: any) {
   console.log(data);
   
    // this.test.tformdata.next(data)
  }
}