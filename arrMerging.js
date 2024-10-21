
// const merging=(nums1,nums2)=>{

//     const concated = nums1.concat(nums2)

//     return concated

// }

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// console.log(merging(arr1,arr2));


//use spred oprator

const merging=(arr1,arr2)=>{
    const result=[...new Set([...arr1,...arr2])]
    const newResult=result.sort()
    return newResult
}

const arr1=[1,2,3,3,5]
const arr2=[4,5,6,3,2,8]

console.log(merging(arr1,arr2));
