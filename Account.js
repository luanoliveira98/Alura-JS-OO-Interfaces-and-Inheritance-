export class Account {
    constructor(initialBalance, customer, agency) {
        this._balance = initialBalance;
        this._customer = customer;
        this._agency = agency;
    }

    deposit(value) {
        if (value <= 0) return;
        this._balance += value;
        return value;
    }

    withdraw(value) {
        if (this._balance < value || value <= 0) return;
        this._balance -= value;
        return value;
    }

    transfer(value, account) {
        const valueWithdraw = this.withdraw(value);
        account.deposit(valueWithdraw);
    }
}
