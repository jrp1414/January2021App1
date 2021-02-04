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
    private ss: StudentService, private ms: MessageService) { }
  hobbies: FormArray = this.fb.array([]);
  addresses: FormArray = this.fb.array([
    this.fb.group({
      AddLine1: "",
      AddLine2: "",
      AddLine3: "",
      City: "",
      State: "",
    })
  ]);
  ngOnInit(): void {
    this.studentEditForm = this.fb.group({
      FirstName: "",
      LastName: "",
      MobileNo: "",
      EmailId: "",
      NotificationType: "email",
      Addresses: this.addresses,
      Hobbies: this.hobbies
    });
    this.route.params.subscribe((parms) => {
      this.student = this.ss.getStudent(parms.id);
      this.studentEditForm.patchValue(this.student);
    });
  }

  onSubmit() {
    console.log(this.studentEditForm.value);
  }

  AddHobby() {
    if (this.hobbies.controls.length < 5) {
      this.hobbies.push(this.fb.control(""));
    } else {
      this.ms.add({ severity: 'info', summary: 'Info', detail: 'Maximum 5 hobbies can be added' });
    }
  }

  AddAddress() {
    if (this.addresses.controls.length < 3) {
      this.addresses.push(this.fb.group({
        AddLine1: "",
        AddLine2: "",
        AddLine3: "",
        City: "",
        State: "",
      }));
    } else {
      this.ms.add({ severity: 'info', summary: 'Info', detail: 'Maximum 3 Addresses can be added' });
    }
  }

}
