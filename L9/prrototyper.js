function Person() {
  this.name = "Ole";
  this.age = 23;
}

const lilleOle = new Person();

console.log(Person.prototype);
console.log(lilleOle.prototype);

Person.prototype.gender = "male"

console.log(lilleOle.gender);
console.log(lilleOle.prototype);  