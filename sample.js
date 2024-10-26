// function isEven(num){
//     return num %2===0 ? "even" : "odd"
// }

// console.log(isEven(3));

     //string reverse


// function reversString(str){

//     return str.split('').reverse().join('')
// }
// console.log(reversString("mueen"));

     //largest

// function largest(arr){
    
//     return Math.max(...arr)
// }
// console.log(largest([2,3,4,5,9,1]))


    //palindrome

    // function palintrome(str){
    //     let reverse=str.split('').reverse().join('')
        
    //     return str===reverse
    // }
    
    // console.log(palintrome("malayalam"))


        //remove duplicate

        // function removeDb(arr){

        //    let result=[...new Set(arr)]

        //    return result
        // }

        // console.log(removeDb([1,1,22,3,4,5,5]));
        

        //if sorted

        // function isSorted(arr){
            
        //     for(i=0;i<arr.length-1;i++){
        //         if(arr[i]> arr[i+1]) return false
        //     }
        //     return true
        // }

        // console.log(isSorted([1,2,3,4,5]));
        

       // fuctoriyalNUm

    //    function calculater(num){
    //     return num<2 ? 1 : num*2
    //    }
    //    console.log(calculater(0));
       
   //first letter to capital

//    function toCapital(str){
//     return str.split(" ").map(word=>word[0].toUpperCase()+word.slice(1)).join(' ')
//    }
// console.log(toCapital("mueen"));


     //merge and remove dupli

    //  function merge(arr1,arr2){
    //     return [...new Set([...arr1,...arr2])]

    //  }
    //  console.log(merge([1,2,3,4],[1,2,3]));
     

    // 


    function countsChars(str){
        const count={};

        for(let char of str){
            count[char] = (count[char] || 0) + 1
        }

        return count;

    }

    console.log();
    