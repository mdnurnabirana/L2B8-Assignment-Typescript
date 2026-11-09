# Access Modifiers in TypeScript

In TypeScript classes, properties and methods can be accessed from anywhere by default. This can cause problems when outside code changes data that should stay protected. Access modifiers solve this by controlling who can use each member of a class.

- `public`: accessible from anywhere (this is the default)
- `private`: accessible only inside the same class
- `protected`: accessible inside the class and its child classes
- `readonly`: can be set once and cannot be changed after that

```ts
class BankAccount {
  protected accountType: string = "Savings";

  constructor(
    public owner: string,
    private balance: number,
    readonly id: number
  ) {}

  deposit(amount: number): void {
    this.balance += amount;
  }
}

class StudentAccount extends BankAccount {
  getType(): string {
    return this.accountType; // works because it is protected
  }
}

const account = new BankAccount("Rana", 500, 1);
account.owner = "Nabi"; // works
account.balance = 0;    // Error: private
account.id = 2;         // Error: readonly
```

Adding a modifier to a constructor parameter creates and assigns the property automatically, so writing `this.owner = owner` is not needed.

These rules are checked only at compile time. After the code is compiled to JavaScript, the modifiers are removed, so they are not a real security feature.

In conclusion, access modifiers make classes safer and easier to maintain. `private` is best for internal data, `protected` for data that child classes need, and `readonly` for values that must not change.