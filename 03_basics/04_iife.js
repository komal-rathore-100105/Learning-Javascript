//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})(); // remeber semicolon

((name)=>{
    console.log(`DB connected Two ${name} `)
})('komal')
