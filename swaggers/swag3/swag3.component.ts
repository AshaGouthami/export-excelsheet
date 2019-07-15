import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



export interface Data{
    "messages": "string",
    "status": true
  }

@Component({
  selector: 'app-swag3',
  templateUrl: './swag3.component.html',
  styleUrls: ['./swag3.component.css']
})
export class Swag3Component implements OnInit {
  Form:FormGroup;
  IResponse:Data
  constructor(private route:ActivatedRoute, private myservice:ApiService,private fb:FormBuilder) { 
  this.Form=this.fb.group({
    prefix:['',Validators.required],
  });
 }
ngOnInit() {
  // this.route.queryParams.subscribe(
  //   params=>{
  //   this.IResponse=params['IResponse']
  //   console.log(params);  
  //   });
}
data(){
  this.myservice. getparams(this.Form.value.prefix).subscribe(
    (result:Data)=>{
      console.log('result=>',result.messages,result.status)
    }
  )
}
} 
