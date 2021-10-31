import { Account } from "./Account.js";

export class CheckingAccount extends Account {
    static numberOfAccounts = 0;

    constructor(customer, agency) {
        super(0, customer, agency);
        this._rate = 1.1;

        CheckingAccount.numberOfAccounts += 1;
    }
}