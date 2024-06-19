import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-validations-forms',
  templateUrl: './validations-forms.component.html',
  styleUrls: ['./validations-forms.component.css']
})
export class ValidationsFormsComponent implements OnInit {

  login: any
  selected: any
  formdata: any;
  formData: any = {};
  constructor(private fb: FormBuilder) { }
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
  // submit(data: any) {
  //   console.log(data)
  //   // this.test.esvsdata.next(data)
  // }


  addform(set:any)
  {
       console.log(set);
       if(this.login.invalid)
       {
        const controls=this.login.controls;
        Object.keys(controls).forEach((key)=>
        {
          controls[key].markAsTouched();
        })
       }
       
  }
}

// add(data:any) {
//   console.log(data)
//   if (this.loginform.invalid) {
//     const controls = this.loginform.controls;
//     Object.keys(controls).forEach((key) => {
//       controls[key].markAsTouched();
//     });
//   }
// }
// <button (click)="add(loginform.value)">Submit</button>



// add(data:any) {
//   console.log(data)
//   if (this.loginform.invalid) {
//     const controls = this.loginform.controls;
//     Object.keys(controls).forEach((key) => {
//       controls[key].markAsTouched();
//     });
//   }
// }