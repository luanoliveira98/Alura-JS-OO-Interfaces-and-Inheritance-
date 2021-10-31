import {Customer} from './Customer.js';
import {Account} from './Account.js';
import {CheckingAccount} from './CheckingAccount.js';
import {SavingsAccount} from './SavingsAccount.js';

const customer1 = new Customer("Luan", 11122233309);
const account1 = new Account(0, customer1, 1001);
account1.deposit(500);
account1.withdraw(100);

const savingsAccount = new Account(50, customer1, 1001);

console.log(account1);
console.log(savingsAccount);