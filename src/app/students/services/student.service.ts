import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student.data';

@Injectable({ providedIn: 'root' })
export class StudentService {
    constructor(private http: HttpClient) { }
    private baseUrl: string = "http://localhost:44319/";
    public notify: EventEmitter<boolean> = new EventEmitter();

    setOptions() {
        return {
            headers: new HttpHeaders({
                "authorization": "Bearer " + localStorage.getItem("token")
            })
        };
    }

    getStudents(): Observable<any> {
        return this.http.get(this.baseUrl + "GetStudents", this.setOptions());
    }

    getStudent(id: number): Observable<any> {
        return this.http.get(this.baseUrl + "GetStudent/" + id, this.setOptions());
    }

    addStudent(student: Student): Observable<any> {
        return this.http.post(this.baseUrl + "AddStudent", student, this.setOptions());
    }

    updateStudent(student: Student): Observable<any> {
        return this.http.put(this.baseUrl + "UpdateStudent", student, this.setOptions());
    }

    deleteStudent(id: number) {
        return this.http.delete(this.baseUrl + "DeleteStudent/" + id, this.setOptions());
    }

}


const students: Student[] = [
    {
        StudentId: 1,
        FirstName: "Ram",
        LastName: "Sharma",
        MobileNo: "898848488",
        EmailId: "ram@gmail.com",
        NotificationType: "email",
        Address: {
            AddressId: 1,
            AddLine1: "Handewadi Road",
            AddLine2: "Satav Nagar",
            AddLine3: "JSPM",
            City: "Pune",
            State: "Maharashtra"
        }
    },
    {
        StudentId: 2,
        FirstName: "Amol",
        LastName: "Pathak",
        MobileNo: "9855896899",
        EmailId: "amol@gmail.com",
        NotificationType: "email",
        Address: {
            AddressId: 2,
            AddLine1: "Magarpatta Road",
            AddLine2: "Hadapsar",
            AddLine3: "JSPM",
            City: "Pune",
            State: "Maharashtra"
        }
    },
    {
        StudentId: 3,
        FirstName: "Subhasis",
        LastName: "Dutta",
        MobileNo: "858589658",
        EmailId: "subhasis@gmail.com",
        NotificationType: "mobile",
        Address: {
            AddressId: 3,
            AddLine1: "Bhubaneswar",
            AddLine2: "Bhubaneswar",
            AddLine3: "BBSR",
            City: "Bhubaneswar",
            State: "Odisha"
        }
    }

]