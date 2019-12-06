import { Component, OnInit } from '@angular/core';
import { CommonServicesService } from '../common-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public _commonService: CommonServicesService){}
  fname:string = "";
  mname:string = "";
  lname:string = "";
  phone:number=0;
  email:string = "";
  password1:string='';
  password2:string='';

  ngOnInit() {
  }

  register(){
    let res = true;
    if(!this.fname || !this.lname || !this.email || !this.password1 ||!this.password2){
      res = false;
     alert("First Name, Last Name, email and password are mandatory fields"); 
    } if(this.password1 != this.password2){
      res = false;
      alert("Passwords don't match")
    }
    if(!this.email.includes("@")||!this.email.includes(".com")){
      res = false;
      alert("Invalid Email");
    }if((this.password1 && this.password1.length < 5) || (this.password2 && this.password2.length < 5)){
      res = false;
      alert("Password has to be mininium of 5 characters");
    }else{
      if(!res){
      alert("Check your data");
      }else{
        let payload = {
          "first_name":this.fname,
          "middle_name":this.mname,
          "last_name":this.lname,
          "mobile":this.phone,
          "email":this.email,
          "password":this.password1
        };
        this._commonService.registerUser(payload).subscribe(resp =>{
          if(!resp){
            alert("faulty entry")
          }else{
            console.log(resp);
          }
        })
      }
    }
  }

}
