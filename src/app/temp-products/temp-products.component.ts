import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'temp-products',
  templateUrl: './temp-products.component.html',
  providers:[
    // LoggerService,
    // ProductService
  ]
})
export class TempProductsComponent implements OnInit {

  constructor(private logger: LoggerService,private ps: ProductService) { }

  ngOnInit(): void {
    this.logger.log("In Temp Products");
    this.ps.notify.subscribe((data)=>{
      alert("Notified in Temp Products : "+ data);
    });
  }

}
