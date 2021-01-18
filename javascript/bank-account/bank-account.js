/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}

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
