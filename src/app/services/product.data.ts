
export class Product {
    constructor(public productId: number, public productName: string, public productCode: string,
        public releaseDate: Date, public price: number,
        public starRating: number, public imageUrl: string,public currentAvailibility?:boolean,public description?: Description) {
    }
}
export class Description {
    constructor(public descText?: string, public emailId?: string) {
    }
}

