import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, ProductsComponent, ProductDetailsComponent, SignupComponent } from '../components.index';
import { MatTableComponent } from '../mat-table/mat-table.component';
import { ProductGuard } from '../services/product.guard';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "products", component: ProductsComponent },
  { path: "productdetails/:id", component: ProductDetailsComponent, canActivate: [ProductGuard] },
  { path: "signup", component: SignupComponent },
  { path: "students", loadChildren: () => import("../students/students.module").then(m => m.StudentsModule) },
  { path: "mattable", component: MatTableComponent },
  { path: "", component: HomeComponent },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
