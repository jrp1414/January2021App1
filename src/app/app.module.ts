import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent
    //Components.
    //Directives
    //Pipes
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [
    //Service
  ],
  bootstrap: [AppComponent]
}) // Decorator Function - Atribute in C#
export class AppModule { }
