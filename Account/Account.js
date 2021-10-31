import { Customer } from "../Customer.js";

// Abstract class
export class Account {

    constructor(initialBalance, customer, agency) {
        if (this.constructor == Account) throw new Error("You shouldn't instantiate an object of type Account directly, as this is an abstract class!");
        this._customer = customer;
        this._agency = agency;
        this._balance = initialBalance;
        this._rate = 1;
    }

    set customer(newValue) {
        if (!newValue instanceof Customer) return;
        this._customer = newValue;
    }

    get customer() {
        return this._customer;
    }

    get balance() {
        return this._balance;
    }

    get rate() {
        return this._rate;
    }

    deposit(value) {
        if (value <= 0) return;
        this._balance += value;
        return value;
    }

    withdraw(value) {
        value *= this._rate;
        if (this._balance < value || value <= 0) return 0;
        this._balance -= value;
        return value;
    }

    transfer(value, account) {
        const valueWithdraw = this.withdraw(value);
        account.deposit(valueWithdraw);
    }
}
