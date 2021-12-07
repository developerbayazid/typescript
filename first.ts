let myName: string = 'Bayazid Hasan'; 
let age: number = 22;
const isFamous: boolean = true;

console.log(myName, age, isFamous);

function add(num1:number, num2:number){
    return num1 + num2;
}

function getFullName (firstName: string, lastName: string) :string {
    return firstName + ' ' + lastName;
}

const fullName:string = getFullName('Mohammad', 'Bayazid');
console.log(fullName);

function doubleIt(num: number):void {
    const result = num * 2;
    console.log(result);
}
doubleIt(23);

let multiply2: (x:number, y:number) => number; 
multiply2 = (x, y) => x * y;

const multiply2Result = multiply2(5, 4);
console.log(multiply2Result);

const multiply = (x: number, y: number):number => x * y;
console.log((multiply(3, 5)));

let friend: {
    name: string,
    age: number,
    married: boolean
}

friend = {
    name: 'Hasan',
    age: 22,
    married: false
}
console.log(friend.age);

const friendsRoll: number[] = [12,2,3,4,5,6,6,8,9,7,22,34];
friendsRoll.push(66);
friendsRoll.push(86);

let n:number = 0;
for (let i = 0; i < friendsRoll.length; i++) {
    const element:number = friendsRoll[i];
    if (element > n) {
        n = element;
    }
}
console.log(n);

let player: {
    playerName: string,
    clubName: string,
    salary: number
} = {
    playerName: 'Lionel Messi',
    clubName: 'PSG',
    salary: 340000
}

console.log(player.playerName);


interface Player {
    playerName: string,
    club: string,
    salary: number,
    wife?: string,
    country: string
}

const messi: Player = {
    playerName: "Lionel Messi",
    club: "PSG",
    salary: 69000000,
    country: "Argentina"
}
const ronaldo: Player = {
    playerName: "Cri Ronaldo",
    club: "Real Madrid",
    salary: 23000000000,
    country: "Portugal"
}

function getBonus(player: {salary: number} | Player){
    return player.salary * 2;
}

const bonusResult = getBonus({salary: 40940});
const bonusResult2 = getBonus(messi);
const bonusResult3 = getBonus({salary: 23})
console.log(bonusResult2);


class Human {
    name: string;
    private wife: string;
    constructor (name: string, wife:string){
        this.name = name;
        this.wife = wife;
    }
    getInfo(){
        return this.name + ' ' + this.wife;
    }
}

const humanInfo = new Human('Bayazid Hasan', 'undefined');
console.log(humanInfo.getInfo());