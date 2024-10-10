// const tinderUser = new Object()  // singleton object
const tinderUser = {}            // non singleton object


tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser); 


const regularUser = {
    email: "sam@openai.com",
    fullname: {
        userfullname: {
            firstname: "aashutosh",
            lastname: "mishra"
        }
    }
}

// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}  // not a coorect way to merge two objects
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2)  // empty object behaves as source and other are treated as targets
// console.log(obj3);

const obj3 = {...obj1, ...obj2}  // spreading and adding, most commonly used
// console.log(obj3)

const users =[                  // arrays of objects
    {
        id: 1,
        email: "sam@openai.com"
    },
    {
        id: 2,
        email: "maurati@openai.com"
    },
    {
        id: 3,
        email: "illya@openai.com"
    }
]

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course = {
    coursename: "how-to-earn-money",
    price: "999",
    courseInstructor: "aashutosh"
}

// course.courseInstructor   // good but there is a better way

const{courseInstructor: instructor} = course  // de-structuring objects, now instructor can be used in place of courseInstuctor
console.log(instructor);

// json api format
// json: javascript object notation
// {
//     "name": "aashutosh",
//     "coursename": "get-rich",
//     "price": "free"
// }

[
    {},
    {},
    {}
]