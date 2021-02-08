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
  students: Student[] = [];
  constructor(private ss: StudentService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.refreshStudents();
    this.ss.notify.subscribe((flag) => {
      this.refreshStudents();
    });
  }

  private refreshStudents() {
    this.ss.getStudents().subscribe((resp) => {
      this.students = resp;
    });
  }

  ShowToast() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }

  student: Student;
  DeleteStudent(student: Student) {
    this.student = student;
    this.messageService.clear();
    this.messageService.add({
      key: 'c', sticky: true, severity: 'warn',
      summary: 'Are you sure to Delete ' + student.FirstName + ' ' + student.LastName + '?',
      detail: 'Confirm to proceed'
    });
  }

  onConfirm() {
    this.messageService.clear('c');
    this.ss.deleteStudent(this.student.StudentId).subscribe(() => {
      this.refreshStudents();
    });
  }

  onReject() {
    this.messageService.clear('c');
  }

}
