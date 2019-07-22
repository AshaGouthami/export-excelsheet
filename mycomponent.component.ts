import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator,  MatSort} from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import * as XLSX from 'xlsx';
import * as _ from 'lodash';

export interface DATA{
  id:number;
  username:string;
  email:string;
  city:string;
  company:string
}

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent  {
  // data:['ID','USERNAME','EMAIL','CITY','COMPANY']
  dataSource;
  dataList:DATA[]
  displayedColumns: string[] = [ 'id','username', 'email', 'city','company'];

  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static:true}) sort:MatSort;

  constructor(private myservices:ServiceService, private translate:TranslateService) { 
    this.fetch_userdata();
  }
  fetch_userdata(){
    this.dataSource= this.myservices.getuserdata().subscribe((dataList:DATA[])=>{
       this.dataList=dataList;
       this.dataSource=new MatTableDataSource(dataList);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort=this.sort;
    });
  }

  ExportTOExcel(){
    const workSheet = XLSX.utils.json_to_sheet(this.dataList.map(data => _.pick(data, this.displayedColumns)));
    const workBook = XLSX.utils.book_new(); 
    console.log(workSheet);
    
    XLSX.utils.book_append_sheet(workBook, workSheet, 'Sheet1'); 
    var range = XLSX.utils.decode_range(workSheet['!ref']); 
    // XLSX.writeFile(workBook, 'mycomponent.xlsx') 
    console.log("workSheet['!ref']==>",workSheet['!ref'],range);    //(workSheet['!ref']) default
    
    for(var C = range.s.r; C <= range.e.r; ++C) {
    var address = XLSX.utils.encode_col(C) + "1";                   // <-- first row, column number C
    if(!workSheet[address]) continue;
    console.log(address);

    workSheet[address].v = workSheet[address].v.replace(workSheet[address].v,this.translate.instant('data.'+workSheet[address].v));
    console.log(workSheet[address].v);
    }
    XLSX.writeFile(workBook, 'mycomponent.xlsx')
    
   }
  }
 















// }

  // XLSX.writeFile(workBook, 'newfile.xlsx');
  // var oldtext = "OLD";
  // var newtext = "NEW";

  // var XLSX = require('xlsx'); // require the module

  // /* read the file */
  // //var workbook = XLSX.readFile('original.xlsx'); // parse the file
  // //var sheet = workbook.Sheets[workbook.SheetNames[0]]; // get the first worksheet

  // /* loop through every cell manually */
  // var range = XLSX.utils.decode_range(workSheet['!ref']); // get the range
  // for(var R = range.s.r; R <= range.e.r; ++R) {
  //   for(var C = range.s.c; C <= range.e.c; ++C) {
  //     /* find the cell object */
  //     var cellref = XLSX.utils.encode_cell({c:C, r:R}); // construct A1 reference for cell
  //     if(!workSheet[cellref]) continue; // if cell doesn't exist, move on
  //     var cell = workSheet[cellref];

  //     /* if the cell is a text cell with the old string, change it */
  //     if(!(cell.t == 's' || cell.t == 'str')) continue; // skip if cell is not text
  //     if(cell.v === oldtext) cell.v = newtext; // change the cell value
  //   }
  // }  
  // }














//     res=>{
    //     this.dataList=res;
    //     console.log(this.dataList);
    //   },
    //   error=>{
    //     console.log(error)
    //   });
  
  



