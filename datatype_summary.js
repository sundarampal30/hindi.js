// primitive 

// 7 type : string,number,boolearn,null,undefined,symbol,bigInt

const score = 100
const scoreValue = 100.3

const isLoggedId = false
const outsidetemo = null
let useEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 456123201698n





// reference (non primitive) 

// Array, Object , fuctions
const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "sundaram",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}

let bigNumber = 12345;

//console.log(typeof bigNumber);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive), heap (Non-primitive)
let myYoutubename = "sundarampal30";

let anthername = "instagram";
anthername = "myyoutube";

console.log(myYoutubename);
console.log(anthername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
};

let userTwo = userOne;

userTwo.email = "sundaram@google.com";

console.log(userOne.email);
console.log(userTwo.email);

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^




