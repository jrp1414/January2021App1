import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  AppComponent, StringInterpolationComponent, PropertyBindingComponent,
  EventBindingComponent, TwowayBindingComponent, ProductsComponent,
  ProductThumbnailComponent, TempProductsComponent, HomeComponent,
  HeaderComponent, FooterComponent, ProductDetailsComponent, SignupComponent
} from "./components.index";
import { LoggerService } from './services/logger.service';
import { MessageService } from 'primeng/api';
import { MatTableComponent } from './mat-table/mat-table.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JanBatchInterceptor } from './students/services/JanBatch.interceptor';
import { StoreModule } from '@ngrx/store';
import { studentReducer } from './store/student.reducer';
import { CoreModule } from './shared/core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing/app-routing.module';



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
    MatTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    StoreModule.forRoot({ studentR: studentReducer })
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
