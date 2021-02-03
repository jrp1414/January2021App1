import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Student } from '../services/student.data';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styles: [
  ]
})
export class StudentEditComponent implements OnInit {
  studentEditForm: FormGroup;
  student: Student;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private ss: StudentService,private ms:MessageService) { }
  hobbies: FormArray = this.fb.array([]);
  ngOnInit(): void {
    this.studentEditForm = this.fb.group({
      FirstName: this.fb.control(""),
      LastName: this.fb.control(""),
      MobileNo: this.fb.control(""),
      EmailId: this.fb.control(""),
      NotificationType: this.fb.control(""),
      Address: this.fb.group({
        AddLine1: this.fb.control(""),
        AddLine2: this.fb.control(""),
        AddLine3: this.fb.control(""),
        City: this.fb.control(""),
        State: this.fb.control(""),
      }),
      Hobbies: this.hobbies
    });
    this.route.params.subscribe((parms) => {
      this.student = this.ss.getStudent(parms.id);
      this.studentEditForm.patchValue(this.student);
      // this.studentEditForm = this.fb.group({
      //   FirstName: this.fb.control(this.student.FirstName),
      //   LastName: this.fb.control(this.student.LastName),
      //   MobileNo: this.fb.control(this.student.MobileNo),
      //   EmailId: this.fb.control(this.student.EmailId),
      //   NotificationType: this.fb.control(this.student.NotificationType),
      //   Address: this.fb.group({
      //     AddLine1: this.fb.control(this.student.Address.AddLine1),
      //     AddLine2: this.fb.control(this.student.Address.AddLine2),
      //     AddLine3: this.fb.control(this.student.Address.AddLine3),
      //     City: this.fb.control(this.student.Address.City),
      //     State: this.fb.control(this.student.Address.State),
      //   })
      // });
    });



  }

  onSubmit() {
    console.log(this.studentEditForm.value);
  }

  AddHobby() {
    if (this.hobbies.controls.length < 5) {
      this.hobbies.push(this.fb.control(""));
    } else {
      this.ms.add({severity:'info', summary: 'Info', detail: 'Maximum 5 hobbies can be added'});
    }

  }

}
