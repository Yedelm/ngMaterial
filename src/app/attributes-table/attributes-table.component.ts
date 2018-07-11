import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatTableDataSource, MatSort} from '@angular/material';
import { caseAttributes } from '../model/caseAttributesModel';
import { AttributeServiceService } from '../service/attribute-service.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatPaginator } from '@angular/material';


@Component({
  selector: 'app-attributes-table',
  templateUrl: './attributes-table.component.html',
  styleUrls: ['./attributes-table.component.css']
})
export class AttributesTableComponent implements OnInit {
  ELEMENT_DATA: caseAttributes[];
  dataChannge;
  dataSource;
  
  displayedColumns: string[] = ['Attributes','Value','RiskScore','Documents','Notes'];
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  summedScore = 80;

  constructor(private attributesService: AttributeServiceService) {
    // this.attributesService.Attributes
    // .subscribe(data => {
    //   this.dataChannge = data;
    // })

   }

  ngOnInit() {
    this.attributesService.getAttributes()
    .subscribe(res => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    });

    
    // this.attributesService.loadAll();
    // this.onGet();
    // this.dataChannge = this.ELEMENT_DATA;
  }

  // onGet(){
  //   this.attributesService.Attributes;
  // }

}



// const ELEMENT_DATA: caseAttributes[] = [
//   {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
//   {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
//   {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
//   {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
//   {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
//   {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
//   {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
//   {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
//   {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
//   {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
//   {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
//   {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
//   {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
//   {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
//   {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
//   {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""},
//   {Attributes: "dsfa", Value: [{value: 'A'},{value: 'B'},{value: 'c'},{value: 'D'}], RiskScore: 1.0079, Documents: 2,Notes:""}
// ];