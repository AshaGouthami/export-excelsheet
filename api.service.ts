import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) {}
  getdata1(){
    return this.http.get("http://202.65.158.172:9093/activedirectory/1/users");
  }
  getdetails(){
    return this.http.get("http://202.65.158.172:9093/segment/1/all");
  }

  getdata(){
    return this.http.get("http://202.65.158.172:9093/segment/1/all");

  }
  postdata(segmentdata){
    return this.http.post("http://202.65.158.172:9093/segment/create/segment?moduleid",segmentdata);
  }
  putdata(edituser){
    return this.http.put("http://202.65.158.172:9093/segment/update?moduleid",edituser)
  }
  getparams(prefix){
    return this.http.get("http://202.65.158.172:9097/service/1/validate/service-prefix/1/1?serviceprefix=" +prefix)
  }
}
