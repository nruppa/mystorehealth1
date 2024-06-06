// import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatSort, Sort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table'; export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];
// @Component({
//   selector: 'app-searching',
//   templateUrl: './searching.component.html',
//   styleUrls: ['./searching.component.css']
// })

// export class SearchingComponent implements OnInit {


//   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
//   dataSource = new MatTableDataSource(ELEMENT_DATA);

//   @ViewChild(MatSort) sort: MatSort = new MatSort
//   searchTerm: any;

//   ngOnInit() {
//     this.dataSource.sort = this.sort;
//     console.log(this.dataSource.sort);
//     const sortState: Sort = { active: 'name', direction: 'asc' };
//     this.sort.active = sortState.active;
//     this.sort.direction = sortState.direction;
//     this.sort.sortChange.emit(sortState);
//   }
//   applyFilter() {
//     const filterValue = this.searchTerm.trim().toLowerCase();
//     this.dataSource.filter = filterValue;
//     console.log(this.dataSource.filter,'filter');

//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }
// }
import { Component, OnInit, } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];


@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.css']
})

export class SearchingComponent implements OnInit {
  // searchTerm: any;
  searchTerm: string = '';
  ngOnInit(): void {
    this.dataSource = ELEMENT_DATA;
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  // displayedColumns = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  // applyFilter(filterValue: string, columnName: string) {
  //   this.dataSource.filter = JSON.stringify({ [columnName]: filterValue.trim().toLowerCase() });
  // }
  applyFilter() {
    const filterValue = this.searchTerm.toLowerCase();
    this.dataSource = ELEMENT_DATA.filter(
      element =>
        element.name.toLowerCase().includes(filterValue) ||
        element.symbol.toLowerCase().includes(filterValue) ||
        element.position.toString().includes(filterValue) ||
        element.weight.toString().includes(filterValue)
    );
  }
  // applyFilter(column: string, value: string) {
  //   const filterValue = value.toLowerCase();
  //   this.dataSource = ELEMENT_DATA.filter(
  //     element =>
  //       element[column].toString().toLowerCase().includes(filterValue)
  //   );
}

