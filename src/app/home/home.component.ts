import { Component, OnInit } from '@angular/core';
import { CommonServicesService } from '../common-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allData: any = [];
  selected:string = 'param2';
  p2:string = "";
  p3:string = "";
  p4:string = "";
  user =JSON.parse(localStorage.getItem('user')) || {};
   
  constructor(public _commonService: CommonServicesService) { }

  ngOnInit() {
   this.getData();
  }

  createData() {
    let rawData = localStorage.getItem('user'); 
    let user = JSON.parse(rawData);
    let p1 = user.id;
    let payload = {"param1":p1,"param2":this.p2,"param3":this.p3,"param4":this.p4};
    this._commonService.addData(payload).subscribe((resp):any=>{
      if(!resp){
        alert("Data not entered")
      }else{
        console.log(resp)
      }
    });
  }
  getData():any{
    this._commonService.getAllData().subscribe((data):any =>{
      this.allData = data['cruds'];
    });
  }

}
