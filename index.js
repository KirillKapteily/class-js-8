//1
let mass = "hello world!";
console.log(mass.split(" "));

//2
let massow = ["mango", "banana", "potato"];
console.log(massow.join(" "));

//3
let masso2 = "2025/03/30";
let parts = masso2.split("/");
let joinParts = [parts[2], parts[1], parts[0]];
console.log(joinParts.join("-"));

//4
fruits = ["banana", "apple", "kiwi", "pear"];
console.log(fruits.indexOf("kiwi")); //
console.log(fruits.includes("banana")); //

//5
let numb = ["1", "2", "3", "4", "5"];
console.log(numb.indexOf("4"));

let vegetables = ["cucumber", "tomato", "potato", "onion", "gransis"];
console.log(vegetables);

console.log(vegetables.join(" "));

//6
// let people = [];
// console.log(people.push(1));
// console.log(people.push(2));
// console.log(people.push(3));

// console.log(people.pop());

// console.log(people.unshift(4));
// console.log(people.shift());
// console.log(people);

//7
let numbers = [1, 3, 6, 9, 12];
console.log(numbers.push(15));

console.log(numbers);

let something = ["cat", "dog", "parrot"];
console.log(something.pop());

console.log(something);

//8
let clients = ['Jane', 'Eva', 'Jack', 'Max'];
console.log(clients.slice(1));

//9
let fruits2 = ["apple", "banana", "cherry", "mango", "pineapple"];
let nF = fruits2.slice(1, 3);
console.log(nF);

//10 - nums
let newNums = [1, 2, 3, 4, 5, 6, 7, 8 ,9];
let nN = newNums.splice(1, 3);
console.log(nN);

//11 + nums
let newNums2 = [1, 2, 3, 4, 5];
newNums2.splice (4, 0, 1, 2, 3);
console.log(newNums2);

//12
let newNums3 = [1, 2, 3, 4, 5];
newNums3.splice (1, 2, 3, 4);
console.log(newNums3);

//13
// let numn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let nF = numn.slice(0, 5);
// console.log(nF);

//14
let numn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numn2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(numn.concat(numn2));

//15
const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;

for (let element of array1) {
  total += element;
}

for (let element of array2) {
    total += element;
}

console.log({ total });

//16
const message = 'Welcome to Ukraine!';
console.log(message.split(''));
console.log(message.indexOf('l'));
let joinPartsn = [message[0], message[1], message[2], message[3], message[4], message[5], message[6], message[7], message[8], message[9], message[10], message[11],message[12], message[13], message[14], message[15],message[16], message[17]];
console.log(joinPartsn.join(""));

// console.log(summ);
