const elevatorMachine=(currentFloor,targetFloor,totalFloors)=>{

    if(targetFloor>totalFloors || targetFloor<1) {

        return 'invalid target floor'
    }
    if(currentFloor===targetFloor) {
        return 'already this floor'
    }
    const directon= targetFloor>currentFloor ? "up" : "down"
    const toTravel = Math.abs(targetFloor - currentFloor)
    return `elevator mpoving ${directon} by ${toTravel}`
}

console.log(elevatorMachine(0,5,7));
