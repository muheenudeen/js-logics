const vendingMechine=(itemCode,money)=>{
    const items ={
        A1:{name:'coffee',price:15},
        A2:{name:'tea',price:10},
        A3:{name:'boost',price:18}
    }
    const selectedItem= items[itemCode];
    if(!selectedItem){
        return "item not found"
    }
    if(money<selectedItem.price){
        return "insufficient funds"
    }

    const change = (money - selectedItem.price).toFixed(18)
    return `dispensing ${selectedItem.name}. your change ${change}`



}
console.log(vendingMechine("A2", 20)); 
