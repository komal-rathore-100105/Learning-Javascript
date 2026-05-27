const userEmail ="komal@gmail" //[]

if(userEmail){
    console.log("got user email");
}
else{
    console.log("dont have user email");
}
//falsy vaules
//false,0,-0,bigint-0n,"",null,undefined, NaN

//truthy values
//"0",'false'," ",[],{},function(){}

// if(userEmail.length===0){
//     console.log("Array is empty");
// }

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
}

//false==0 --true
//false=='' --true
//0==""    --true

let val1;
val1 =5??10
console.log(val1); //5
val1 =null??10;
console.log(val1); //10
val1=undefined??15
console.log(val1)  //15
val1=null??10??120 //10

//terniary operator

//condition?true:false

const iceTeaPrice =100
iceTeaPrice >=80 ? console.log()