import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Student } from '../services/student.data';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students:Student[] = [];
  constructor(private ss:StudentService,private messageService:MessageService) { }

  ngOnInit(): void {
    this.students = this.ss.getStudents();
  }

  ShowToast(){
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
  }

}
