export class Student {
    constructor(public StudentId: number, public FirstName: string, public LastName: string,
        public MobileNo: string, public EmailId: string, public NotificationType: string,
        public Address: Address) {
    }
}

export class Address {
    constructor(public AddressId: number, public AddLine1: string, public AddLine2: string,
        public AddLine3: string, public City?: string, public State?: string) {
    }
}

