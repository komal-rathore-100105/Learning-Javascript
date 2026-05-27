//for

for(let index =0; index<=10; index++){
    const element =index;
    if(element ==5){
        console.log("5 is best number")
    }
    console.log(element)
}
//console.log(element);

// for(let i=0;i<=10;i++){
//     console.log(`Outer loop values ${i}`);

//     for(let j=0;j<=10;j++){
//         console.log(`Inner Loop values ${j}`);
//     }
// }

//similarily apply on arrays

//break and continue

//while
let index =0;
while(index<=10){
   console.log(`Value of index is ${index}`);
   index = index +2;
}
let myArray =["flash","batman","superman"]
let arr =0;
while(arr<myArray.length){
    console.log(`Value is ${myArray[arr]}`);
    arr = arr+1;
}
let score =11;
do{
  console.log(`score is ${score}`);
  score++;
}while(score<=10)

 arr =[1,2,3,4,5]
for(const num of arr){
    console.log(num)
}
const greetings ="hello world"
for(const greet of greetings){
    console.log(`Each char is ${greet}`);
}  
//maps
const map =new Map()
map.set('In',"india")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('In',"india")
console.log(map);

for(const [key,value] of map){
    console.log(key, ':-',value);
}

const myObject={
    'game1' : 'NFS',
    'game2' : 'Spiderman'    
}