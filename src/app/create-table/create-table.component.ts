import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.css']
})
export class CreateTableComponent implements OnInit {

 

  selected: any=[];
  formvalue: any = [];
  userdata: any = [];
  displayedColumns: string[] = ['username', 'password', 'dateofbirth', 'Address', 'Selectanfield','gender'];
  // dataSource: any=[];
  column = [
    { label: "username", type: "text", key: "username" },
    { label: "password", type: "text", key: "password" },
    { label: "dateofbirth", type: "date", key: "dateofbirth" },
    { label: "Address", type: "text", key: "Address" },
    { label: "gender", type: "radio", key: "gender" },
    { label: "Selectanfield", type: "select", key: "Selectanfield" },
    { label: "edit", type: "edit", key: "" }
  ]
  dataSource = [{
    Address: "tyt",
    Selectanfield: "option1",
    dateofbirth: " ",
    gender: "male",
    password: "1111111111",
    username: "tyhtu"
  }]
  form: any;
  constructor(private test: TestService, private router: Router, private fb: FormBuilder) { }
  table!: MatTable<any>
  
  ngOnInit(): void {
    this.test.esvsdata.subscribe((x)=>
    {
      this.dataSource.push(x)
    })
  }
 
 
}


