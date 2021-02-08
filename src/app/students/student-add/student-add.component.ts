import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { range } from 'rxjs';
import { Student } from '../services/student.data';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styles: [
  ]
})
export class StudentAddComponent implements OnInit {
  studentAddForm: FormGroup;
  student: Student;
  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private ss: StudentService, private ms: MessageService, private router: Router) { }

  ngOnInit(): void {
    this.studentAddForm = this.fb.group({
      FirstName: new FormControl("", [Validators.required, Validators.minLength(3)]),
      LastName: ["", Validators.required],
      MobileNo: ["", Validators.pattern("[0-9 ]{10}")],
      EmailId: ["", [Validators.required, Validators.email]],
      NotificationType: "email",
      //Age: [0,range],
      // Age: [0, range(10, 25)],
      // DOB: new Date(2021,2,15),
      Address: this.fb.group({
        AddLine1: ["", Validators.required],
        AddLine2: "",
        AddLine3: "",
        City: "",
        State: "",
      })
    });

    this.studentAddForm.get("NotificationType").valueChanges.subscribe((value) => {
      this.SetNotification(value);
    });
  }

  onSubmit() {
    this.ss.addStudent(this.studentAddForm.value).subscribe(() => {
      this.ss.notify.emit(true);
      this.router.navigate(["/students"]);
    });

    // console.log(this.studentAddForm.value);
  }

  SetNotification(notType: string) {
    let mobileControl = this.studentAddForm.get("MobileNo");
    if (notType == 'mobile') {
      mobileControl.setValidators(Validators.required);
    } else {
      mobileControl.clearValidators();
    }
    mobileControl.setValidators(Validators.pattern("[0-9 ]{10}"));
    mobileControl.updateValueAndValidity();
  }

}
