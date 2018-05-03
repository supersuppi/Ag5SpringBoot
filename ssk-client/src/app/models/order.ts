export class Order {
    userID: number;
    packageID: number;
    payToken: string;
    amount: number;

    constructor(userID: number,packageID: number,payToken: string,amount: number) {
        this.userID = userID;
        this.packageID = packageID;
        this.payToken = payToken;
        this.amount = amount;
    }

    get getPackageID(): number {
        return this.packageID;
      }
    
    set setPackageID(value: number) {
        this.packageID = value;
      }
    
}