import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from '../material/material.module';
import { PrimengModule } from '../primeng/primeng.module';




@NgModule({
  exports:[
    FormsModule,
    SharedModule,
    MaterialModule,
    PrimengModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatSortModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
