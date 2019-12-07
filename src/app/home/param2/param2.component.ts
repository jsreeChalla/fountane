import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-param2',
  templateUrl: './param2.component.html',
  styleUrls: ['./param2.component.css']
})
export class Param2Component implements OnInit {
  @Input('param2Data') param2Data:any;
  constructor() { }

  ngOnInit() {
    console.log(this.param2Data)
  }

}
