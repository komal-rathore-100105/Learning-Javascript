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
