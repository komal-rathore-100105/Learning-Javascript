// arrays

const myArr = [0,1,2,3,4,5]
const myHeroes = ["Lucky","krishna"]

const myArr2 = new Array(1,2,4,3)
console.log(myArr[0])
console.log(myArr[1])

//Array Methods
myArr.push(6);
console.log(myArr)
console.log(myArr[1])
myArr.push(7)
console.log(myArr)
myArr.pop()
console.log(myArr)

myArr.unshift(9)
console.log(myArr)
myArr.shift()
console.log(myArr)

console.log(myArr.includes(9))
console.log(myArr.indexOf(3))

const newArr = myArr.join()
console.log(newArr)
console.log(myArr)
console.log(typeof newArr)

console.log("A ",myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B ",myArr)

const myn2 =myArr.splice(1,3);
console.log("C ", myArr);
console.log(myn2);

