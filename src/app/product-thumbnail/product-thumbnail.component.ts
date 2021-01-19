import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../services/product.data';

@Component({
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.css']
})
export class ProductThumbnailComponent implements OnInit {

  @Input("pd") product:Product;
  @Output("sd") sendData:EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  SendToParent(){
    this.sendData.emit(prompt("Enter Name"));
  }

}
