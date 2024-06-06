import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-lookup',
  templateUrl: './store-lookup.component.html',
  styleUrls: ['./store-lookup.component.css']
})
export class StoreLookupComponent implements OnInit {
  items = "Alter"
 
  ca = "Alter";
  item:any
  constructor() { }

  ngOnInit(): void {
  }
  // onScroll(): void {
  //   this.item
      
  // }
}

