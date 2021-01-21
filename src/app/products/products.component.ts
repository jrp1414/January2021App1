import { Component, OnInit } from '@angular/core';
import { Description, Product, productList } from '../services/product.data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent {
  products: Product[] = productList;
  filterText: string = "";
  constructor() {
    // for (let key in this.products) {
    //   console.log(key);
    //   console.log(this.products[key]);
    // }

    // for (let prod of this.products) {
    //   console.log(prod);
    // }
  }

  getStyles(prod) {
    if(prod.starRating>3){
      return {backgroundColor:"chartreuse",color:"blue"};
    }
    return {backgroundColor:"crimson",color:"white"};
  }

  getClass(prod){
    if (prod.starRating>3) {
        // return "green bold";
        return ["green","bold"];
    }
    return "red";
  }

  ReceivedData(data){
    console.log(new Date().toTimeString()+" : "+data);
  }

  TestPipe(){
    this.products.push(
        new Product(25,"Test Product","TPC-001",new Date('12/25/2020'),55.52,4,"",true,new Description("Test Product","test@gmail.com")));
  }

}
