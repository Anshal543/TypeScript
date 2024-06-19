let user: [string, number, boolean];

user = ["John", 30, true];

type MyTuple = [string, number, boolean];

let user1: MyTuple;
user1 = ["John", 30, true];

user1[1] = 10
user1.push(true)