import {Customer} from './Customer.js';
import {CheckingAccount} from './CheckingAccount.js';
import {SavingsAccount} from './SavingsAccount.js';
import { SalaryAccount } from './SalaryAccount.js';

const customer1 = new Customer("Luan", 11122233309);
const checkingAccount = new CheckingAccount(customer1, 1001);
checkingAccount.deposit(500);
checkingAccount.withdraw(100);

const savingsAccount = new SavingsAccount(50, customer1, 1001);
savingsAccount.withdraw(10);

const salaryAccount = new SalaryAccount(customer1);
salaryAccount.deposit(100);
salaryAccount.withdraw(10);

console.log(checkingAccount);
console.log(savingsAccount);
console.log(salaryAccount);