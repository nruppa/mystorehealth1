import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reactive-table',
  templateUrl: './reactive-table.component.html',
  styleUrls: ['./reactive-table.component.css']
})
export class ReactiveTableComponent implements OnInit {
tableColumns: any;
displayedColumns: any;

  constructor() { }
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  ngOnInit(): void {
  }

}
