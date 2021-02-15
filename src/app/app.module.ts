import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Route, RouterModule, Routes } from "@angular/router";

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
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductGuard } from './services/product.guard';
import { StudentsModule } from './students/students.module';
import { SignupComponent } from './signup/signup.component';
import { MaxminDirective } from './shared/directives/maxmin.directive';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { PrimengModule } from './shared/primeng/primeng.module';
import { MessageService } from 'primeng/api';
import { MatTableComponent } from './mat-table/mat-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JanBatchInterceptor } from './students/services/JanBatch.interceptor';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "products", component: ProductsComponent },
  { path: "productdetails/:id", component: ProductDetailsComponent, canActivate: [ProductGuard] },
  { path: "signup", component: SignupComponent },
  { path: "mattable", component: MatTableComponent },
  { path: "", component: HomeComponent },
  // { path: "**", redirectTo: "home" }
];

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    ProductsComponent,
    ProductThumbnailComponent,
    TempProductsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailsComponent,
    SignupComponent,
    MatTableComponent,
    //Components.
    //Directives
    //Pipes
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    StudentsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule,
    PrimengModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    //Service,
    LoggerService,
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: JanBatchInterceptor, multi: true }
    // ProductService
  ],
  bootstrap: [AppComponent]
}) // Decorator Function - Atribute in C#
export class AppModule { }
