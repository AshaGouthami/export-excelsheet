import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ISegment } from '../../_model/swaggermodel';
import { ApiService } from 'src/app/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  segmentForm:FormGroup;
  segmentdata: ISegment;
  constructor(private myservice:ApiService,private fb:FormBuilder,
    public dialogRef: MatDialogRef<CreateComponent>, @Inject(MAT_DIALOG_DATA) public data:any ) 
   {
      this.segmentForm=this.fb.group({
        segmentCode :['',Validators.required],
        segmentDesc :['',Validators.required],
        segmentName :['',Validators.required],
        segmentPrecedence:['',Validators.required],

      });
    }

  // getSegment() {
  //   this.myservice.getdata().subscribe(result => {
  //     this.segmentdata = result['segments'];
  //     console.log("Result==>", result);
  //   });
  // }

  createSegment(){
    this.segmentdata={
      segmentCode:this.segmentForm.value.segmentCode,
      segmentDesc:this.segmentForm.value.segmentDesc,
      segmentName:this.segmentForm.value.segmentName,
      segmentPrecedence:this.segmentForm.value.segmentPrecedence
    }
    console.log("data==>",this.segmentdata);
    this.myservice.postdata(this.segmentdata).subscribe(
      res=>{
        if(res){
          this.dialogRef.close(this.segmentdata);
        }
      }
    )
  }

  onNoClick(){
    this.dialogRef.close();
  }
  
  ngOnInit() {
  
  }
}
