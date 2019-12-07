import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-param3',
  templateUrl: './param3.component.html',
  styleUrls: ['./param3.component.css']
})
export class Param3Component implements OnInit {
  @Input('param3Data') param3Data:any;
  constructor() { }

  ngOnInit() {
    console.log(this.param3Data)
  }

}
