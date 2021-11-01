import { Authentication } from './Authentication.js';
import { Customer } from './Customer.js';
import { Director } from './Employee/Director.js';
import { Manager } from './Employee/Manager.js';

const director = new Director("Jefferson", 5000, 3214567890);
director.registerPassword("12345");

const manager = new Manager("Carol", 10000, 1234567890);
manager.registerPassword("123");

const customer = new Customer("Luan", 3216549870, "321");

const directorIsLogged = Authentication.login(director, "12345");
const managerIsLogged = Authentication.login(manager, "123");
const customerIsLogged = Authentication.login(customer, "321");

console.log(directorIsLogged);
console.log(managerIsLogged);
console.log(customerIsLogged);
