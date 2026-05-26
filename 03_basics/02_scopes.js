//var c=300
let a =300
if(true){
    let a=10
    const b= 20
    var c =30
    console.log("Inner: ", a)
}

console.log(a)
//console.log(b)
console.log(c)

function one(){
    const username ="komal"
    function two(){
        const website ="youtube"
        console.log(username);
    }
    //console.log(website)
    two()
}
//one()

if(true){
    const username = "komal"
    if(username==="komal"){
        const website ="youtube"
        console.log(username+website)
    }
    //console.log(website)
}
//console.log(username)
addone(5) // no error 
function addone(num){
    return num+1;
}
//addone(5)
// addtwo(5) --error 
const addtwo =function(num){
    return num+2;
}
addtwo(5) // expression