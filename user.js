export default class User {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
}

export function printName(user) {
  console.log(`Username is ${user.name} and is ${user.age} years old`);
}

export function printAge(user) {
  console.log (`The user is ${user.age} years old`);
}

//export default User
//export { printAge, printName }