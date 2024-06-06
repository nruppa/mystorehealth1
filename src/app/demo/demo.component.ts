import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

 
  selectedColor = 'red';
  formGroup!: FormGroup;
  formTitle: String = "Add Service";
  @Input() status: any
  value: any;
  selectedValue: any;
  buttonToggleValue = 'left';
  className: any
  constructor(
    private formBuilder: FormBuilder,
    // private snackBar: MatSnackBar,
    private router: Router
  ) { }
  // status = [
  //   { value: 'ACTIVE', viewValue: 'ACTIVE', },
  //   { value: 'INACTIVE', viewValue: 'INACTIVE', },
  //   { value: 'APPROVED', viewValue: 'APPROVED', },
  //   { value: 'PENDINGAPPROVAL', viewValue: 'PENDINGAPPROVAL' },
  // ];
  status1 = [
      { value: 'ACTIVE', viewValue: 'ACTIVE', className: 'active' },
      { value: 'INACTIVE', viewValue: 'INACTIVE', className: 'inactive' },
      { value: 'APPROVED', viewValue: 'APPROVED', className: 'active' },
      { value: 'PENDINGAPPROVAL', viewValue: 'PENDINGAPPROVAL', className: 'inactive' },
    ];
  ngOnInit() {
    if (this.router.url.includes('auto')) {
      this.status = [
        { value: 'ACTIVE', viewValue: 'ACTIVE' },
        { value: 'INACTIVE', viewValue: 'INACTIVE' }
      ]
    } else if (this.router.url.includes('store')) {
      this.status = [
        { value: 'APPROVE', viewValue: 'APPROVED' },
        { value: 'PENDINGAPPROVAL', viewValue: 'PENDINGAPPROVAL' }
      ]
    }
    if (this.router.url.includes('auto')) {
      this.status1 = [
        { value: 'ACTIVE', viewValue: 'ACTIVE', className: 'active' },
        { value: 'INACTIVE', viewValue: 'INACTIVE', className: 'inactive' }
      ]
    } else if (this.router.url.includes('store')) {
      this.status1 = [
        { value: 'APPROVED', viewValue: 'APPROVED', className: 'active' },
        { value: 'PENDINGAPPROVAL', viewValue: 'PENDINGAPPROVAL', className: 'inactive' }
      ]
    }
  }


  selectedValue1(status: any) {
    this.selectedValue = status.value
    console.log(this.selectedValue);
    if (this.selectedValue === 'ACTIVE' || this.selectedValue === 'APPROVE') {
      this.className = 'active';
    }
    else if (this.selectedValue === 'INACTIVE' || this.selectedValue === 'PENDINGAPPROVAL') {
      console.log('inactive');
      this.className = 'inactive';
    }
  }

  setBackground(className: string) {
    this.className = className
  }
}