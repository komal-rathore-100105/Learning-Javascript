//reduce()

const myNums =[1,2,3]
// const myTotal =myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval: ${currval}`);
//     return acc+currval;
// },0)
const myTotal = myNums.reduce((acc,curr)=>acc+curr,0)

console.log(myTotal)

const shoppingCart =[
    {
        itemName:"bsc",
        price:3000
    },
    {
        itemName:"acc",
        price:30045
    },
    {
        itemName:"dc",
        price:3050
    },
    {
        itemName:"tc",
        price:3000
    }
]
const pricetopay =shoppingCart.reduce((acc,item)=>acc+item.price,0);
console.log(pricetopay);
