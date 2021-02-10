import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
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
  loading: boolean = false;
  constructor(private messageService: MessageService,
    private primengConfig: PrimeNGConfig, private router: Router) {
    this.router.events.subscribe((ev: RouterEvent) => {
      switch (true) {
        case ev instanceof NavigationStart: {
          this.loading = true;
          break;
        }
        case ev instanceof NavigationEnd:
        case ev instanceof NavigationError:
        case ev instanceof NavigationCancel: {
          this.loading = false;
        }
        default:
          break;
      }
    });
  }
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}
