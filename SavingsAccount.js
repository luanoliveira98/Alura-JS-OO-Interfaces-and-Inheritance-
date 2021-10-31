import { Account } from "./Account.js";

export class SavingsAccount extends Account {
    constructor(initialBalance, customer, agency) {
        super(initialBalance, customer, agency);
        this._rate = 1.02;
    }
}