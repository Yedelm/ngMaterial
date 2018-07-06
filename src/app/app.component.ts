import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbols'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbols: { value: string; }[];
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbols: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}]},
  {position: 2, name: 'Helium', weight: 4.0026, symbols: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}]},
  {position: 3, name: 'Lithium', weight: 6.941, symbols: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}]},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbols: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}]},
  {position: 5, name: 'Boron', weight: 10.811, symbols: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}]},
  {position: 6, name: 'Carbon', weight: 12.0107, symbols: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}]},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbols: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}]},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbols: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}]},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbols: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}]},
  {position: 10, name: 'Neon', weight: 20.1797, symbols: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}]},
  {position: 11, name: 'Sodium', weight: 22.9897, symbols: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}]},
  {position: 12, name: 'Magnesium', weight: 24.305, symbols: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}]},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbols: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}]},
  {position: 14, name: 'Silicon', weight: 28.0855, symbols: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}]},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbols: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}]},
  {position: 16, name: 'Sulfur', weight: 32.065, symbols: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}]},
  {position: 17, name: 'Chlorine', weight: 35.453, symbols: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}]},
  {position: 18, name: 'Argon', weight: 39.948, symbols: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}]},
  {position: 19, name: 'Potassium', weight: 39.0983, symbols: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}]},
  {position: 20, name: 'Calcium', weight: 40.078, symbols: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}]},
];