//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  #balance = null;

  open() {
    if (this.#balance !== null) throw new ValueError();
    this.#balance = 0;
  }

  close() {
    this.balance;
    this.#balance = null;
  }

  deposit(amount) {
    if (amount < 0) throw new ValueError();
    this.#balance = this.balance + amount;
  }

  withdraw(amount) {
    if (amount > this.balance || amount < 0) throw new ValueError();
    this.#balance = this.balance - amount;
  }

  get balance() {
    if (this.#balance === null) throw new ValueError();
    return this.#balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
