import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StudentsComponent } from './students/students.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "students", component: StudentsComponent,
    children:[
      {path:"add",component:StudentAddComponent},
      {path:":id",component:StudentDetailsComponent},
      {path:":id/edit",component:StudentEditComponent}
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
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class StudentsModule { }
