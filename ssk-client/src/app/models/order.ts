export class Order {
    userID: string;
    packageID: string;
    payToken: string;
    amount: string;

    constructor(userID: string,packageID: string,payToken: string,amount: string) {
        this.userID = userID;
        this.packageID = packageID;
        this.payToken = payToken;
        this.amount = amount;
    }
    
}