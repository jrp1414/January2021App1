import { Component } from "@angular/core";

@Component({
    selector: "app-si",
    templateUrl: "./string-interpolation.component.html"
})
export class StringInterpolationComponent {

    constructor() {
        // this.person = new Person();
        // this.person.Name = "Ram";
        // this.person.Address = "Pune";

        //Person person = new Person{Name="Ram",Address="Pune"};
    }
    // num1 = 10;
    num1: number = 10;
    num2: number = 20;
    termsAndConditions: boolean = true;
    name: string = "Ram";

    firstName: string = "Amol";
    lastName: string = "Sharma";
    // person: Person = new Person("Ram", new Address("Hadapsar","Pune"));
    // person: Person = new Person("Ram");
    person: Person;

    // getName(param1:string,param2:string):string{

    // }

    getName(): string {
        return this.firstName + " " + this.lastName;
    }
}

// export class Person {
//     Name: string;
//     Address: string;
// }

// export class Person {
//     constructor(name:string,address:string) {
//         this.Name = name;
//         this.Address = address;
//     }
//     Name: string;
//     Address: string;
// }

export class Person {
    constructor(public Name:string,public Address?:Address) {
    }
}

export class Address {
    constructor(public AddLine1:string,public AddLine2:string) {
    }
}

