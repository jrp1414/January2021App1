import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { Description, Product } from '../services/product.data';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ["./products.component.css"],
  // encapsulation:ViewEncapsulation.None,
  providers: [
    // LoggerService,
    // ProductService
  ]
})
export class ProductsComponent {
  products: Product[] = [];
  filterText: string = "";
  constructor(private logger: LoggerService,private ps:ProductService) {

    this.products = this.ps.getProducts();
    // for (let key in this.products) {
    //   console.log(key);
    //   console.log(this.products[key]);
    // }

    // for (let prod of this.products) {
    //   console.log(prod);
    // }
  }

  getStyles(prod) {
    if (prod.starRating > 3) {
      return { backgroundColor: "chartreuse", color: "blue" };
    }
    return { backgroundColor: "crimson", color: "white" };
  }

  getClass(prod) {
    if (prod.starRating > 3) {
      // return "green bold";
      return ["green", "bold"];
    }
    return "red";
  }

  ReceivedData(data) {

    // console.log(new Date().toTimeString()+" : "+data);
    this.logger.log("Received in Parent : "+data);

    this.ps.notify.emit("Received in Parent");
  }

  TestPipe() {
    this.products.push(
      new Product(25, "Test Product", "TPC-001", new Date('12/25/2020'), 55.52, 4, "", true, new Description("Test Product", "test@gmail.com")));
  }

}
