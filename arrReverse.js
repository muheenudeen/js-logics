// const revetceArr=(nums)=>{
//     const result =nums.reverse()
//     return result
// }

// console.log((revetceArr([1,3,5,7,9])));


// const arrReverce=(nums)=>{

//     const reversed=[]

//     for(let i=nums.length-1;i>=0;i--){
//         reversed.push(nums[i])
//     }
//     return reversed
// }


// console.log(arrReverce([1,2,3,4,5]));


//reduce

const reverceArry=(nums)=>{
    const reversed=nums.reduce((acc,curr)=>[curr,...acc],[])
    return reversed
}

console.log(reverceArry([1,2,3,4,5]));
