
let atmBalance=1000;

const atmMachine = (withdrawAmount)=>{
    
    if(withdrawAmount>atmBalance){
        return 'atm has insufficient funds'
    }

    if(withdrawAmount<=0){
        return 'invalid withdraw amound'
    }
    atmBalance -= withdrawAmount
    return `withdraw successfull atm balance ${atmBalance}`
}

console.log(atmMachine(0));
