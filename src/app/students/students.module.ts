import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StudentsComponent } from './students/students.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { MessageService } from 'primeng/api';
import { StudentsResolver } from './services/students-resolver.service';
import { StudentDetailsResolver } from './services/student-details.resolver';

const routes: Routes = [
  {
    path: "students", component: StudentsComponent, resolve:{students:StudentsResolver},
    children:[
      {path:"add",component:StudentAddComponent},
      {path:":id",component:StudentDetailsComponent, resolve:{student:StudentDetailsResolver}},
      {path:":id/edit",component:StudentEditComponent, resolve:{student:StudentDetailsResolver}}
    ]
  }
];

@NgModule({
  declarations: [
    StudentsComponent,
    StudentDetailsComponent,
    StudentEditComponent,
    StudentAddComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    MaterialModule,
    PrimengModule
  ],
  providers:[]
})
export class StudentsModule { }
