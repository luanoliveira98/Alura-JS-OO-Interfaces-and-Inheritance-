export class Customer {
    get cpf() {
        return this._cpf;
    }

    constructor(name, cpf) {
        this.name = name;
        this._cpf = cpf;
    }
}