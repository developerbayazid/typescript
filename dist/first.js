"use strict";
let myName = 'Bayazid Hasan';
let age = 22;
const isFamous = true;
console.log(myName, age, isFamous);
function add(num1, num2) {
    return num1 + num2;
}
function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
const fullName = getFullName('Mohammad', 'Bayazid');
console.log(fullName);
function doubleIt(num) {
    const result = num * 2;
    console.log(result);
}
doubleIt(23);
let multiply2;
multiply2 = (x, y) => x * y;
const multiply2Result = multiply2(5, 4);
console.log(multiply2Result);
const multiply = (x, y) => x * y;
console.log((multiply(3, 5)));
let friend;
friend = {
    name: 'Hasan',
    age: 22,
    married: false
};
console.log(friend.age);
const friendsRoll = [12, 2, 3, 4, 5, 6, 6, 8, 9, 7, 22, 34];
friendsRoll.push(66);
friendsRoll.push(86);
let n = 0;
for (let i = 0; i < friendsRoll.length; i++) {
    const element = friendsRoll[i];
    if (element > n) {
        n = element;
    }
}
console.log(n);
let player = {
    playerName: 'Lionel Messi',
    clubName: 'PSG',
    salary: 340000
};
console.log(player.playerName);
const messi = {
    playerName: "Lionel Messi",
    club: "PSG",
    salary: 69000000,
    country: "Argentina"
};
const ronaldo = {
    playerName: "Cri Ronaldo",
    club: "Real Madrid",
    salary: 23000000000,
    country: "Portugal"
};
function getBonus(player) {
    return player.salary * 2;
}
const bonusResult = getBonus({ salary: 40940 });
const bonusResult2 = getBonus(messi);
const bonusResult3 = getBonus({ salary: 23 });
console.log(bonusResult2);
class Human {
    constructor(name, wife) {
        this.name = name;
        this.wife = wife;
    }
    getInfo() {
        return this.name + ' ' + this.wife;
    }
}
const humanInfo = new Human('Bayazid Hasan', 'undefined');
console.log(humanInfo.getInfo());
