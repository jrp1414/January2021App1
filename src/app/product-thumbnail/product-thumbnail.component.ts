import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { Product } from '../services/product.data';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.css']
})
export class ProductThumbnailComponent implements OnInit {

  @Input("pd") product:Product;
  @Output("sd") sendData:EventEmitter<string> = new EventEmitter();
  constructor(private logger:LoggerService,private ps:ProductService) { }

  ngOnInit(): void {

    this.ps.notify.subscribe((data)=>{
      alert("Notified It in Thumbnail : " + data);
    });
  }

  SendToParent(){
    this.logger.log("Sending from child");
    this.sendData.emit(prompt("Enter Name"));
  }

}
