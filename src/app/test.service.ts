import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  storeData: any = [];
  dataSource:any=[];

  constructor() { }
  page!:boolean
  storenum= new BehaviorSubject<any>([]);
  
store1(data:any){
  this.storeData = data
}


esvsdata = new ReplaySubject<any>();
}
