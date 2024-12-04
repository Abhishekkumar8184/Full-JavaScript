                                           //  Primitive(call by value)

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//        console.log(id === anotherId);

// const bigNumber = 3456543576654356754n


//                                 Non primitive  ( Reference)

//           Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"];                           // Array


let myObj = {                                                        // object
    name: "Abhishek",
    age: 22,
}


const myFunction = function(){                       //  Function 
 // console.log("Hello world");
}

//   console.log(typeof anotherId);


// https://262.ecma-international.org/5.1/#sec-11.4.3



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//  Primitive(stack)           Non primitive(Heap)
     
let myYoutubechanel= "Chanel1"

let anotherYoutubechanel = "myYoutubechanel"
anotherYoutubechanel =" chanel2"
// console.log(myYoutubechanel);
 // console.log(anotherYoutubechanel);


 let userOne ={
    email:"user@gmail.com"
    pui:"user@ybl"
 }

 let userTwo =userOne

 console.log(userOne);
 console.log(userTwo);
 
 
 
 
 
