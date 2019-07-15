import * as XLSX from 'xlsx';
import * as _ from 'lodash';
import { Component, OnInit, ViewChild } from '@angular/core';
// import {  ISegment } from '../_model/swaggermodel';
import { ApiService } from 'src/app/api.service';
import { MatTableDataSource, MatSort ,MatPaginator} from '@angular/material';

export interface ISegment {
  segmentCode: string;
  segmentDesc: string;
  segmentName: string;
  segmentId:number;
  status:number;
  segmentPrecedence: number;
}

@Component({
  selector: 'app-swag2',
  templateUrl: './swag2.component.html',
  styleUrls: ['./swag2.component.css']
 })
 export class Swag2Component implements OnInit {
  [x: string]: any;

 @ViewChild(MatSort, {static: true}) sort: MatSort; 
 @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


 Data: ISegment[];
 dataSource;
 displayedColumns:string[]=['segmentCode','segmentDesc','segmentId','segmentName','segmentPrecedence','status']
// displayedColumns1:string[]=['كود القطاع','قطعة تنازلي','معرف المقطع','اسم القطعة','أسبقية المقطع','الحالة']

  constructor(private myservice:ApiService) {}
   fetchdata(){
     this.dataSource=this.myservice.getdetails().subscribe(
       result=>{
         this.Data=result['segments'];
         this.dataSource= new MatTableDataSource<ISegment>(this.Data);
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
       }
     )
   }

  ngOnInit() {
    this.fetchdata();
  }
  sortData(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  ExportTOExcel(){
  const workBook = XLSX.utils.book_new(); 
  const workSheet = XLSX.utils.json_to_sheet(this.Data.map(data => _.pick(data, this.displayedColumns)));
  XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); 
  XLSX.writeFile(workBook, 'temp.xlsx')
  }
}
