const person = {
  firstName: "John",
  lastName: "Doe",

  // Getter: compute full name
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // Setter: split full name into first and last
  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(person.fullName);  // John Doe (getter called)

person.fullName = "Jane Smith";  // setter called
console.log(person.firstName);   // Jane
console.log(person.lastName);    // Smith