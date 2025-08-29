// Base bank account object
const bankaccount = {
    balance: 1000,
    deposit: function (amt) {
        this.balance += amt;
    },
    withdraw: function (amt) {
        this.balance -= amt;
    },
    getBalance: function () {
        return this.balance;
    }
};

// Create an extensible savings account
let savingaccount = Object.create(bankaccount);
savingaccount.accno = "sb001";
savingaccount.accholder = "Rakesh";
savingaccount.bank = "HDFC";
savingaccount.branch = "Bangalore BTM";

// ✅ Object is extensible
console.log("Is savingaccount extensible?", Object.isExtensible(savingaccount)); // true

// Static Methods
console.log("Keys:", Object.keys(savingaccount));
console.log("Values:", Object.values(savingaccount));
console.log("Entries:", Object.entries(savingaccount));
console.log("Own property names:", Object.getOwnPropertyNames(savingaccount));

Object.defineProperty(savingaccount, "type", {
    value: "savings",
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperties(savingaccount, {
    ifsc: {
        value: "HDFC0001234",
        writable: false,
        enumerable: true,
        configurable: true
    },
    status: {
        value: "active",
        writable: true
    }
});

console.log("Defined Property (type):", Object.getOwnPropertyDescriptor(savingaccount, "type"));
console.log("All Property Descriptors:", Object.getOwnPropertyDescriptors(savingaccount));

// Add a symbol key
const secret = Symbol("secretCode");
savingaccount[secret] = "XYZ123";

console.log("Symbol keys:", Object.getOwnPropertySymbols(savingaccount));

// Convert entries to object
const entryArray = [["a", 1], ["b", 2]];
const fromEntriesObj = Object.fromEntries(entryArray);
console.log("From entries:", fromEntriesObj);

// Prototype methods
console.log("constructor:", savingaccount.constructor);
console.log("hasOwnProperty 'accno':", savingaccount.hasOwnProperty("accno"));
console.log("isPrototypeOf:", bankaccount.isPrototypeOf(savingaccount));
console.log("propertyIsEnumerable 'type':", savingaccount.propertyIsEnumerable("type"));
console.log("toLocaleString:", savingaccount.toLocaleString());
console.log("toString:", savingaccount.toString());
console.log("valueOf:", savingaccount.valueOf());

// Comparison using Object.is
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN)); // true
console.log("Object.is(0, -0):", Object.is(0, -0)); // false

// Prototype related
console.log("Prototype of savingaccount:", Object.getPrototypeOf(savingaccount));

// Set prototype (not recommended often, but shown here)
const newProto = {
    welcomeMsg: "Welcome to your account!"
};
Object.setPrototypeOf(savingaccount, newProto);
console.log("New prototype property:", savingaccount.welcomeMsg);

// Extensibility checks
console.log("Is extensible:", Object.isExtensible(savingaccount));
console.log("Is frozen:", Object.isFrozen(savingaccount));
console.log("Is sealed:", Object.isSealed(savingaccount));

// Clean add after extensibility confirmed
savingaccount.email = "singhh@yahoo.com";
console.log("New property added:", savingaccount.email);