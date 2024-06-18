type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number;
}

type cardNumber = {
    cardNumber : string;
}

type cardDate = {
    carddate : string;
}

type cardDetails = cardNumber & cardDate & {
    cvv: number;

}

let myUser: User = {
    _id: "1234",
    name: "John",
    email: "anshal@gmail.com",
    isActive: true
}

myUser.email = "ayan@gmail.com"
// myUser._id = "anshal123"   // cannot assign to '_id' because it is a read-only property.