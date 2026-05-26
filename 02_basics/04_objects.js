// const tinderUser =new Object()  //-- singleton
const tinderUser ={}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser)

const regularUser ={
    email:"komal@rathor",
    fullname:{
        userfullname: {
        firstname :"komal",
        lastname: "rathor"
        }
        
    }
}
//console.log(regularUser.fullname.userfullname.firstname)

const obj1 ={1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}
//const obj3 ={obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2,obj4)
//console.log(obj3);
const obj3 ={...obj1, ...obj2}
console.log(obj3)

const users =[
    {
        id:1,
        email:"komal@gmail.com"
    },
    {
        id:1,
        email:"komal@gmail.com"
    },
    {
        id:1,
        email:"komal@gmail.com"
    },
    {
        id:1,
        email:"komal@gmail.com"
    }
]
users[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))