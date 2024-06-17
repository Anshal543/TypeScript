"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type myString = string
function createUser(user) {
    return { name: user.name, email: user.email, isAdmin: user.isAdmin };
}
var userResult = createUser({ name: 'John', email: 'anshal@gmail.com', isAdmin: true });
console.log(userResult);
