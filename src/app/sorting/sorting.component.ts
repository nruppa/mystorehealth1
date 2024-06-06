import { LiveAnnouncer } from '@angular/cdk/a11y';
import { OnInit } from '@angular/core';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: number;
  symbol: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 'MPI-1', name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 'MPI-2', name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 'MPI-3', name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 'MPI-4', name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 'MPI-12', name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 'MPI-6', name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 'MPI-7', name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 'MPI-8', name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 'MPI-11', name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 'MPI-10', name: 'Neon', weight: 20.1797, symbol: 'Ne' },
]
@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // @Input() set tableData(data: T[]) {
  //   this.setTableDataSource(data);
  // }
  ngOnInit(): void {
  }

  @ViewChild(MatSort) set matSort(sort: MatSort) {
    if (!this.dataSource.sort) {
      this.dataSource.sort = sort;
    }
  }
  setTableDataSource(data:any=[]) {
    console.log(this.dataSource.filteredData[0].position);
    this.dataSource = new MatTableDataSource<any>(data);
    console.log(data,'dataa');
    this.dataSource.sortingDataAccessor = (item: any, property: string) => {
      //this is for the 
      const [parent, child] = property.split('.');
      if (parent && child) {
        return item[parent][child];
      }
      else {
        switch (property) {
          case 'position':
            return parseInt(item.requestId.split('-')[1], 10);
        }
      }
    };
}

}
