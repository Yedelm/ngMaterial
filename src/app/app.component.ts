import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  displayedColumns: string[] = ['Attributes','Value','RiskScore','Documents','Notes'];
  dataSource = new MatTableDataSource<caseAttributes>(ELEMENT_DATA);
  summedScore = 80;

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

export interface caseAttributes {
  Attributes: string;
  Value: {value: string}[];
  RiskScore: number;
  Documents: number;
  Notes: string;
}

const ELEMENT_DATA: caseAttributes[] = [
  {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
  {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
  {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
  {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
  {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
  {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
  {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
  {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
  {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
  {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
  {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
  {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
  {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
  {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
  {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
  {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
  {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""}
];