import { Component, OnInit } from '@angular/core';
import { Student } from '../services/student.data';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students:Student[] = [];
  constructor(private ss:StudentService) { }

  ngOnInit(): void {
    this.students = this.ss.getStudents();
  }

}
