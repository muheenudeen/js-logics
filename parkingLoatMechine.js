
const parkingLot=(totalSlots,occupiredSlots,requestedSlots,pendingSloats)=>{

    let availableSlots = [];

    for(let i=1;i<=totalSlots;i++){
        if(!occupiredSlots.includes(i)){
            availableSlots.push(i)
        }
    }
    if(requestedSlots>availableSlots.length){
        return 'parking full'
    }
    return `asigned slots ${availableSlots.slice(0,requestedSlots).join(',')}`
}


console.log(parkingLot(10,[1,2,5,7],3));
