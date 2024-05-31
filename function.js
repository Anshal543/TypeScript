"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello"
}
function getUpperCase(val) {
    console.log(val.toUpperCase());
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("anshal", "ansha@gmail.com");
signUpUser("anshal", "anshal@gmail.com", true);
getUpperCase("hello");
var myVal = addTwo(3);
// function getVal(myVal: number){
//   if(myVal > 0){
//     return true
//   }else{
//     return '200 ok'
//   }
// }
var getHello = function (greet) {
    return "";
};
var heroes = ['batman', 'superman', 'flash', 'wonder'];
heroes.forEach(function (hero) {
    console.log(hero);
});
