import { Component, OnInit } from '@angular/core';
import { ISegment } from '../_model/swaggermodel';
import { ApiService } from 'src/app/api.service';
// import { MatTableDataSource, MatSort } from '@angular/material';
import { FormGroup} from '@angular/forms';
import { MatDialog } from '@angular/material';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


@Component({
  selector: 'app-swag2post',
  templateUrl: './swag2post.component.html',
  styleUrls: ['./swag2post.component.css']
})
export class Swag2postComponent implements OnInit {
  
  segmentdata: ISegment[];
  // dataSource;
  // displayedColumns: string[] = ['segmentId', 'segmentCode', 'segmentDesc', 'segmentName', 'segmentPrecedence'];

  // create = {
  //   segmentCode: "navbkj",
  //   segmentDesc: 'sddcdcdc',
  //   segmentName: 'nsknkwfsncs',
  //   segmentPrecedence: 5,
  //   segmentId: 6
  // }

  // @ViewChild(MatSort, { static: true }) sort: MatSort;


  // segmentdetails() {
  //   this.dataSource = this.myservice.segmentdata().subscribe(
  //     result => {
  //       this.data = result['segments'];
  //       // this.dataSource = new MatTableDataSource<ISegment>(this.data);
  //       console.log(this.dataSource);
  //     }
  //   )
  // }

  // segmentdetails1(create) {
  //   this.myservice.segmentdata1(create).subscribe(
  //     result => {
  //       this.data.push(this.create)
  //       this.dataSource = new MatTableDataSource<ISegment>(this.data);
  //       this.dataSource.sort = this.sort;

  //     }
  //   )
  // }

  // sortData() {
  //   this.dataSource.sort = this.sort;
  // }

  constructor(private myservice: ApiService ,private dialog: MatDialog) {}

  getSegment() {
    this.myservice.getdata().subscribe(result => {
      this.segmentdata = result['segments'];
      console.log("Result==>", result);
    });
    (error)=>{
      console.log("Error-->",error);
    }
  }

  openDialogCreate(){
    const dialogRef = this.dialog.open(CreateComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe( result => {
      if(result){
        this.getSegment();
      }
    });
  }

  openDialogEdit(){
    const dialogRef = this.dialog.open( EditComponent,{
      width:'300px',  
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        this.getSegment();
      }
    });
  }  
  ngOnInit() {
    this.getSegment();
  }
}
