//singleton

//object literals
const mySym = Symbol("Key1")
const JsUsers={
    name:"Komal",
    "full name" :"komal rathor",
    age :20,
    [mySym] :"myKey1",  // use [] for symbol denotion
    location : "Jaipur",
    email: "24.a09.027@gmail.com",
    isloggedIn : false,
    lastLoginDays: ["monady","sunday"]
}

console.log(JsUsers.email)
console.log(JsUsers["email"])
console.log(JsUsers["full name"]) // only way
console.log(typeof JsUsers.mySym) // string
console.log(JsUsers[mySym])

JsUsers.email ="komalrathor@gmail.com"
// Object.freeze(JsUsers)
// Object.freeze(JsUsers)
JsUsers.email ="kamala@gmail.com"
console.log(JsUsers);

JsUsers.greeting = function(){
    console.log(`Hello, How are you, ${this.name}`)
}
console.log(JsUsers.greeting()); // greeting -func anonymous ,// Greeting() - func