//const tinderUser = new Object()
//   console.log(tinderUser)
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//  console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Abhishek",
            lastname: "Kumar"
        }
    }
}

//   console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//  const obj3 = { obj1, obj2 }
//  console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2, obj4)
//  console.log(obj3);

///    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
const obj3 = {...obj1, ...obj2}
//   console.log(obj3);



const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);


///console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//  console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js",
    price: "999" ,
    courseBuy:"Abhishek",
}

//  course.coursebuy
 const {courseBuy : buy} = course
 console.log(b20y);
 