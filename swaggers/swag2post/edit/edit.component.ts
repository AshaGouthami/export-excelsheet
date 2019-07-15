import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';

 export interface User{
  segmentId   :number,
  segmentCode:string,
  segmentDesc:string,
  segmentName:string,
  segmentPrecedence:number
}
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm:FormGroup;
  edituser: User;
  constructor(private fb:FormBuilder, private myservice:ApiService,public dialogRef:MatDialogRef<EditComponent>)
   { 
      this.editForm=this.fb.group({
        segmentId   :['',Validators.required],
        segmentCode :['',Validators.required],
        segmentDesc :['',Validators.required],
        segmentName :['',Validators.required],
        segmentPrecedence:['',Validators.required],

      });
    if(this.edituser)
    {
      this.editForm.patchValue(this.edituser);
      
      console.log(this.edituser);
    }
  }
 
  updateSegment(){
    this.edituser={
      segmentId:this.editForm.value.segmentId,
      segmentCode:this.editForm.value.segmentCode,
      segmentDesc:this.editForm.value.segmentDesc,
      segmentName:this.editForm.value.segmentName,
      segmentPrecedence:this.editForm.value.segmentPrecedence
    }
    console.log("updatedata==>",this.edituser);
    this.myservice.putdata(this.edituser).subscribe(
      res=>{
        if(res){
          this.dialogRef.close(this.edituser);
        }
      }
    )
    }
    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit() {

  }

}
