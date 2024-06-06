import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { TestService } from '../test.service';

@Component({
  selector: 'app-hdphoneticket',
  templateUrl: './hdphoneticket.component.html',
  styleUrls: ['./hdphoneticket.component.css']
})
export class HdphoneticketComponent implements OnInit {

  sample: any
  store: any = [];
  // @Input() StoreNumbers:any;
  options = [
    { StoreNumbers: "ST0501" },
    { StoreNumbers: "ST0502" },
    { StoreNumbers: "ST0503" },
    { StoreNumbers: "ST0504" },
    { StoreNumbers: "ST0505" }];
  data: any = [];
  filteredOptions!: Observable<any[]>;
  constructor(private test: TestService) { }
  ngOnInit(): void {
    this.test.storenum.subscribe((res) => {
      console.log('storenum', res)
      this.store = res
      console.log(this.store.option.value);
      // console.log( this.sample.patchValue(this.store.StoreNumber))
      // this.data = this.store.option.value
      this.data = this.sample.get('StoreNumber').patchValue(this.store.option.value)
    })
    this.sample = new FormGroup({
      "LADP": new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "Name": new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "Extension": new FormControl('', [Validators.required]),
      "StoreNumber": new FormControl('', [Validators.required]),
      "PhoneType": new FormControl('', [Validators.required]),
      "DeviceExtension": new FormControl('', [Validators.required]),
      "DeviceSerialNumber": new FormControl('', [Validators.required]),
      "DamageType": new FormControl('', [Validators.required]),
      "Note": new FormControl('', [Validators.required]),
    })
    // console.log(this.sample);
  }
  submit() {
    console.log(this.sample);
    // console.log(this.sample.controls['Name'].value)
  }
  change(data:any) {
    console.log('home 33', data);
    this.test.storenum.next(data)
  }
}







