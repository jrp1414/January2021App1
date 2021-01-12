import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pb',
  templateUrl: './property-binding.component.html',
  styles: [
  ]
})
export class PropertyBindingComponent {
  imageUrl: string = "https://angular.io/assets/images/logos/angular/angular.png";
  disabledButton: boolean = true;
  constructor() {
    setTimeout(() => {
      this.disabledButton = false;
      this.imageUrl = "https://angular.io/assets/images/logos/angular/angular_solidBlack.png";
    }, 5000);
  }


}
