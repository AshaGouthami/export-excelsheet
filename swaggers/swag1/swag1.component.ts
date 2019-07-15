import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator} from '@angular/material';
import { ApiService } from 'src/app/api.service';
import { User } from '../_model/swaggermodel';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-swag1',
  templateUrl: './swag1.component.html',
  styleUrls: ['./swag1.component.css']
})
export class Swag1Component implements OnInit {
  pageSize=environment.pageSize;
  Form:FormGroup;
  Users:User[]=[];
  dataSource ;
  displayedColumns: string[]= ['firstName', 'lastName', 'loginId', 'email','phoneNumber'];
 
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  reset: any;
  noDataMessage: boolean;
 
  constructor(private myservice:ApiService) {}
  ngOnInit() {
    this.fetchdata();
  }
  
   fetchdata(){
     this.dataSource=this.myservice.getdata1().subscribe(result=>{
        this.Users=result['users'];
        this.dataSource= new MatTableDataSource<User>(this.Users);
        this.dataSource.paginator = this.paginator;
        console.log(result);
       } 
     );
      }
   applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 

}
