import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class CommonServicesService {
  headers: any;
  constructor(private http: HttpClient) {
      this.headers = new Headers();
      this.headers.append('Content-Type',"application/x-www-form-urlencoded");
  }

  registerUser(data:any){
    let body = data;
    body.salt =data.first_name;
    body.sex =0;
    body.role ='abc';
    this.headers['Content-Type']="application/json";
    this.headers['X-AUTH-TOKEN']= localStorage.getItem('token');
    body.header= this.headers;
    return this.http.post<any>(environment.serverUrl+'register',body).pipe(map(resp=>{
      if(resp){
        console.log(resp);
        return resp;
      }else{
        return "";
      }
    }))
  }

  login(data :any){
    let body ={};
    body['email']=data.email;
    body['password']=data.password;
    body["header"] = this.headers;
    return this.http.post<any>(environment.serverUrl+'login', body).pipe(map(resp=>{
      if(resp && resp.token){
        localStorage.setItem('user', JSON.stringify(resp.auth))
        return resp;
      }else{
        return '';
      }
    }
    ))
    };

  addData(data:any){
    let body = data;
    this.headers.append('X-AUTH-TOKEN',localStorage.getItem('token'));
    body["header"] = this.headers;
    return this.http.post<any>(environment.serverUrl+'', body).pipe(map(resp=>{
      if(resp){
        return resp;
      }else{
        return '';
      }
    }))
  }

  getAllData(){
    let list :any = [];
    return this.http.get(environment.serverUrl+'all/crud');
  }
}
