import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-selection-value',
  templateUrl: './selection-value.component.html',
  styleUrls: ['./selection-value.component.css']
})
export class SelectionValueComponent implements OnInit {
  sendStatus$: any;
  login: any;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    
    this.login = this.fb.group({

      status:''
    })
  }
  triggering(event: any) {
    this.sendStatus$ = event.value
    console.log(event.value)
    console.log(this.sendStatus$,'statusupdate');
    
  }
}
