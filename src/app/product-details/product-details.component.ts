import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../services/product.data';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styles: [
  ]
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  constructor(private ps: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params);
    // this.product = this.ps.getProduct(this.route.snapshot.params.id);

    this.route.params.subscribe((parms)=>{
      this.product = this.ps.getProduct(parms["id"]);
    });
  }

}
