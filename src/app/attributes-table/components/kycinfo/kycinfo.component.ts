import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-kycinfo',
  templateUrl: './kycinfo.component.html',
  styleUrls: ['./kycinfo.component.css']
})
export class KycinfoComponent implements OnInit {
  @Input() dataSource;

  displayedColumns: string[] = ['Attributes','Value','RiskScore','Documents','Notes'];
  

  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit() {
    
    this.dataSource.sort = this.sort;
  }

}
