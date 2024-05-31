function addTwo(num: number): number {
  return num + 2;
  // return "hello"
}

function getUpperCase(val: string) {
  console.log(val.toUpperCase());
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("anshal", "ansha@gmail.com");

signUpUser("anshal", "anshal@gmail.com", true);

getUpperCase("hello");

let myVal = addTwo(3);

// function getVal(myVal: number){
//   if(myVal > 0){
//     return true
//   }else{
//     return '200 ok'
//   }
// }

const getHello = (greet: string): string => {
  return "";
};

const heroes = ["batman", "superman", "flash", "wonder"];
// const heroes = [1, 2, 3, 4, 5];

// heroes.forEach((hero) => {
//   console.log(hero)
// })

// heroes.map((hero: string) => {
//   return `hello ${hero}`;
// });

heroes.map((hero): string => {
  return `hello ${hero}`;
});

function consoleError(message: string): void {
  console.error(message);
  // return message       // you can't return anything from void
}

function handleError(message: string): never {
  // never is used when you are sure that function will never return anything
  // forcefull termination of the a program
  throw new Error(message);
}

export {};
