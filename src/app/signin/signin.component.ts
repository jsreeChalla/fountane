import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServicesService } from '../common-services.service';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
 
  email : string;
  password:string;
  constructor(private router: Router, public _commonService: CommonServicesService){}

  ngOnInit() {}

  submit():any{
    let email = this.email;
    let password = this.password;
   if(email && email.includes('@') && email.includes('.com') && password && password.length>=5){
    this._commonService.login({'email':email,'password':password}).subscribe(payload=>{
      let loginData = payload;
      if(loginData){
        this.router.navigate(['/home']);
        localStorage.setItem('token',loginData.token);
        return loginData.token;
      }else{
        return {"error":"Data Missing"};
      }
    })
   }else{
     alert("invalid email or password less than 5 characters");
     return {"error":"Invalid Data"};
   }
  }

}
