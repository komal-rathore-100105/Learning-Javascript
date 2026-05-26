function sayMyName(){
    console.log("K")
    console.log("K")
    console.log("K")
    console.log("K")
}
//sayMyName()

function loginUserMessage(username="sam"){   
    if(username===undefined){
        console.log("please enter name")
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("komal"))

console.log(loginUserMessage()) // undefined

function calcCartPrice(val1,val2, ...num1){
    return num1;
}
// console.log(calcCartPrice(200,400,500,2000))

console.log(loginUserMessage("komal"))

const user ={
    username: "komal",
    price : 188  
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// prices - undefined
handleObject(user)

const MyNewArray = [200, 400, 100, 600]

function return2ndValue(myArray){
    return myArray[1]
}

console.log(return2ndValue(MyNewArray))
console.log(return2ndValue([200, 400, 100, 600]))