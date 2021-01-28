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
  student:Student;
  constructor(public ss:StudentService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((parms)=>{
      this.student = this.ss.getStudent(parms.id);
    });
  }

}
