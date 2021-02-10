import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../services/student.data';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student: Student;
  constructor(public ss: StudentService, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    // this.route.params.subscribe((parms) => {
    //   this.ss.getStudent(parms.id).subscribe((resp) => {
    //     this.student = resp;
    //   });
    // });
    this.route.data.subscribe((data) => {
      this.student = data.student;
    });
  }

}
