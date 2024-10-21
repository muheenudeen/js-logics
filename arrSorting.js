
// const arrSorting=(nums) =>{
//      const srted=nums.sort()
//      return srted
// }

// console.log(arrSorting(["fave","accore","banana"]));


// const numSort=(nums)=>{
//     const sorted=nums.sort((a,b)=>a-b)
//     return sorted
// }

// console.log(numSort([20,3,44,5,67,8,44]));


// const numSort=(nums)=>{
//     const decent=nums.sort((a,b)=>b-a)
//     return decent
// }

// console.log(numSort([44,6,88,34,22,4,1,4434]));


const people = [
    { name: "John", age: 30 },
    { name: "Anna", age: 24 },
    { name: "Chris", age: 28 }
  ];

  const objSort=(data)=>{
    const obj=data.sort((a,b)=>a.age-b.age)
    return obj
  }

  console.log(objSort(people))