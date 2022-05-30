import U, { printAge as PA, printName } from './user.js'

const user = new U ('Johnstone', 11)

printName(user);
console.log(user);
PA(user);
