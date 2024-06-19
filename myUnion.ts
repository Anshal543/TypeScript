let score: number | string;

score = 10;
console.log(score);

score = "10";
console.log(score);

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let anshal: User | Admin = {
  name: "Anshal",
  id: 1,
};
console.log(anshal);

anshal = {
  username: "Anshal",
  id: 1,
};

console.log(anshal);

function getDBId(id: number | string) {
  console.log(id);
}

getDBId(1);
getDBId("1");

const data: (string | number)[] = [1, 2, 3, 4, 5, "Anshal"];

let pi: 3.14 = 3.14;
pi = 3.14;

let seatAllotmnent: "window" | "aisle" | "middle" = "window";

seatAllotmnent = "aisle";