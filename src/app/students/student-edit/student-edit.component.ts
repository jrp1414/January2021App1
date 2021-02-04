import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { range } from 'src/app/shared/validators/range.validator';
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
      FirstName: new FormControl("", [Validators.required, Validators.minLength(3)]),
      LastName: ["", Validators.required],
      MobileNo: ["", Validators.pattern("[0-9 ]{10}")],
      EmailId: ["", [Validators.required, Validators.email]],
      NotificationType: "email",
      //Age: [0,range],
      Age: [0, range(10, 25)],
      Address: this.fb.group({
        AddLine1: ["", Validators.required],
        AddLine2: "",
        AddLine3: "",
        City: "",
        State: "",
      })
    });
    this.route.params.subscribe((parms) => {
      this.student = this.ss.getStudent(parms.id);
      // this.studentEditForm.patchValue(this.student);
    });

    this.studentEditForm.get("NotificationType").valueChanges.subscribe((value) => {
      this.SetNotification(value);
    });
  }

  onSubmit() {
    console.log(this.studentEditForm);
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

  SetNotification(notType: string) {
    let mobileControl = this.studentEditForm.get("MobileNo");
    if (notType == 'mobile') {
      mobileControl.setValidators(Validators.required);
    } else {
      mobileControl.clearValidators();
    }
    mobileControl.setValidators(Validators.pattern("[0-9 ]{10}"));
    mobileControl.updateValueAndValidity();
  }

}

// function range(control: AbstractControl): ValidationErrors | null {
//   if (control.value < 10) {
//     return { min: true };
//   }
//   if (control.value > 25) {
//     return { max: true };
//   }
//   return null;
// }
