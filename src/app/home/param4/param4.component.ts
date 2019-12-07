import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-param4',
  templateUrl: './param4.component.html',
  styleUrls: ['./param4.component.css']
})
export class Param4Component implements OnInit {
  @Input('param4Data') param4Data:any;
  constructor() { }

  ngOnInit() {
    console.log(this.param4Data,"dskfhlksd")
  }

}
