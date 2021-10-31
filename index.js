import {Customer} from './Customer.js';
import {CheckingAccount} from './CheckingAccount.js';
import {SavingsAccount} from './SavingsAccount.js';

const customer1 = new Customer("Luan", 11122233309);
const checkingAccount = new CheckingAccount(1001, customer1);
checkingAccount.deposit(500);
checkingAccount.withdraw(100);

const savingsAccount = new SavingsAccount(50, customer1, 1001);
savingsAccount.withdraw(10);

console.log(checkingAccount);
console.log(savingsAccount);