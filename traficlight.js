const traficLight=(second)=>{
    
    const totalCycleTime=30
    const timeInCycle = second%totalCycleTime;

    if(totalCycleTime<=10){
        return 'green'
    }else if(timeInCycle<=15){
        return "yellwo"
    }else{
        return "red"
    }
}

console.log(traficLight(14));
