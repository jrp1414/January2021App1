import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { LoggerService } from './services/logger.service';
import { ProductService } from './services/product.service';

@Component({
  // selector: 'app-root',
  // selector: '[app-root]',
  selector: '.app-root',
  // template:"<h1>Hello world. Inline Template</h1>"+
  //           "<h2>Second Line</h2>",
  // template:`
  //   <h1>Multiple Lines</h1>
  //   <h2>Multi Line template</h2>
  // `,
  templateUrl: './app.component.html',
  // styles: [
  //   `h1{
  //     background-color: aqua; 
  //  }
  //  `,
  //   `
  //  h2{background-color:maroon}
  //  `
  // ]
  styleUrls: [
    "./app.component.css"
  ],
  providers: [
    // LoggerService,
    // ProductService
  ]
})
export class AppComponent implements OnInit {
  constructor(private messageService:MessageService,private primengConfig: PrimeNGConfig) {
    
  }
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}
