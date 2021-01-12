import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twb',
  templateUrl: './twoway-binding.component.html',
  styles: [ 
  ]
})
export class TwowayBindingComponent {

  constructor() { }

  OneWayMessage:string="";
  OneWayChange(e){
    this.OneWayMessage = e.target.value;
  }
  OneWayTest(){
    this.OneWayMessage = "One way test";
  }

  TwoWayMessage:string="";
  TwoWayChange(e:string){
    this.TwoWayMessage = e.toUpperCase();
  }
  TwoWayTest(){
    this.TwoWayMessage = "Two way test";
  }

}
