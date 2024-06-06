import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { TestService } from '../test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items = "Alter"
  data: any=[];
  stores: any=[];
  constructor(private test: TestService) { }
  StoreNumber = new FormControl('');
  filteredOptions!: Observable<any[]>;
  options = [
    { StoreNumbers: "ST0501" },
    { StoreNumbers: "ST0502" },
    { StoreNumbers: "ST0503" },
    { StoreNumbers: "ST0504" },
    { StoreNumbers: "ST0505" }
  ];
  ngOnInit() {
    // this.filteredOptions = this.StoreNumber.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value || '')),
    // );
    console.log(this.StoreNumber);
    // this.test.storenum.next(this.StoreNumber)
    this.test.storenum.subscribe((res) => {
      console.log('storenum', res)
      this.stores = res
      console.log(this.stores.option.value);
      // this.data = this.stores.option.value
      this.data = this.StoreNumber.patchValue(this.stores.option.value)
    })
  }
  change(data: any) {
    console.log('home 33', data);
    this.test.storenum.next(data)
  }

  // private _filter(value: string) {
  //   const filterValue = value.toLowerCase();
  //   return this.options.filter(option => option.StoreNumbers.toLowerCase().includes(filterValue));
  // }
}










    // this.StoreNumber.patchValue(this.options[0])
    // console.log(this.StoreNumber);
    // this.test.storenum.next(this.StoreNumber)



