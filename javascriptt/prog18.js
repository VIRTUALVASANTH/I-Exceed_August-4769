class BankAccount {
    constructor(initialBalance = 0) {
        this.balance = initialBalance;
    }

    deposit(amt) {
        this.balance += amt;
    }

    withdraw(amt) {
        this.balance -= amt;
    }

    getBalance() {
        return this.balance;
    }
}

class SavingsAccount extends BankAccount {
    constructor(accno, accholder, bank, branch, initialBalance = 0) {
        super(initialBalance); 
        this.accno = accno;
        this.accholder = accholder;
        this.bank = bank;
        this.branch = branch;
    }
}

class CurrentAccount extends BankAccount {
    constructor(accno, accholder, bank, branch, initialBalance = 0) {
        super(initialBalance);
        this.accno = accno;
        this.accholder = accholder;
        this.bank = bank;
        this.branch = branch;
    }
}

let savingAccount = new SavingsAccount("sb001", "Rohit", "sbi", "Rajajinagar", 1000);
let currentAccount = new CurrentAccount("cb001", "Bharat", "hdfc", "Koramangala", 1000);

console.log(savingAccount.accholder);
savingAccount.deposit(120000);
savingAccount.withdraw(21000);
console.log(savingAccount.getBalance());
