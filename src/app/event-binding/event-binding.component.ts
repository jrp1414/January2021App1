import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eb',
  templateUrl: './event-binding.component.html',
  styles: [
  ]
})
export class EventBindingComponent  {
  message:string="";
  constructor() { }


  ClickExample(){ 
    this.message = "Click Event Occurred!";
  }

  RightClickExample(e:MouseEvent){
    e.preventDefault();
    this.message = "Right Click occured";
  }

  TextChanged(e){
    this.message = e.target.value;
  }
}
