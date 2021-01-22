import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { ProductsComponent } from './products/products.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { ShortenPipe } from './shared/pipes/shorten.pipe';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { BasicHighlightDirective } from './shared/directives/basic-highlight-directive';
import { BetterHighlightDirective } from './shared/directives/better-highlight.directive';
import { UnlessDirective } from './shared/directives/unless.directive';
import { TempProductsComponent } from './temp-products/temp-products.component';
import { LoggerService } from './services/logger.service';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    ProductsComponent,
    ProductThumbnailComponent,
    ShortenPipe,
    FilterPipe,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    TempProductsComponent
    //Components.
    //Directives
    //Pipes
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    //Service,
    LoggerService,
    // ProductService
  ],
  bootstrap: [AppComponent]
}) // Decorator Function - Atribute in C#
export class AppModule { }
