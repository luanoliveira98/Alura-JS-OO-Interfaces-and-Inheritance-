import {Account} from './Account.js';

export class SalaryAccount extends Account {
    constructor(customer) {
        super(0, customer, 100);
        this._rate = 1.01;
    }
}