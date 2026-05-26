const user ={
    username: "komal",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username ="meme"
// user.welcomeMessage();

console.log(this)

// function chai(){
//     let username="komal"
//     console.log(this); // this.usernaem not works in function
// }

const chai = ()=>{
    let username ="komal"
    console.log(this); // not works in arrow func
}
chai()

// const addTwo =(num1,num2)=>{
//     return num1+num2;
// }

// const addtwo=(num1,num2)=> num1+num2;
// const addTwo =(num1,num2)=>(num1+num2);

const addTwo =(num1,num2)=>({username: "komal"})
console.log(addTwo(3,4));

const myArray =[2,4,5,2,4]
//myArray.forEach(()=>())
