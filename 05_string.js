const name = "Abhishek"
const repoCount = 50

//        console.log(name + repoCount + " Value");  concetinate

//         console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // using  backtick  `statement`$(variable)



const gameName = new String('Abishek-hc-com')

//     console.log(gameName[0]);
//         console.log(gameName.__proto__);

//          console.log(gameName.length);
//     console.log(gameName.toUpperCase());
//     console.log(gameName.charAt(2));                    //   postion show
//       console.log(gameName.indexOf('e'));                 //   //   postion show

  const newString = gameName.substring(0, 4)              //  last value not include
//       console.log(newString);

const anotherString = gameName.slice(-3,4)
//    console.log(anotherString);
const newStringOne = "   Abhishek   "
//       console.log(newStringOne);
//        console.log(newStringOne.trim());             // trim() use for space reduce


//       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

