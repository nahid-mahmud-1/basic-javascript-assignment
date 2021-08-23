

// Kilometer To Meter Convert Function.
function kilometerToMeter(kilometer){
    var valueType = typeof kilometer;
    //converting formula
    if(valueType === 'number'){
        var meter = kilometer * 1000; 
        return meter;
    }
    else{
       return "Not a valid value.";
    }
}

// Budget Calculator Function.
function budgetCalculator(watch, mobile, laptop){
    var totalBudget = (watch * 50) + (mobile * 100) + (laptop * 500);
    return totalBudget;
}

// Hotel Cost Calculator Function
function hotelCost(days){
    var totalcost = 0;

    if(days <= 10){
        totalcost = days * 100;
        return totalcost; 
    }
    else if(days <= 20){
        var remainingDays = days - 10;
        totalcost = remainingDays * 80 + (10 * 100);
        return totalcost;
    }
    else if(days > 20){
        var remainingDays = days - 20;
        totalcost = remainingDays * 50 + (10 * 100) + (10 * 80);
        return totalcost;
    }
}

// Mega Friend Function
function megaFriend(name1, name2, name3){
    var nameList = [name1, name2, name3];
    var megaElement = ""; // Empty string to compare with length.
    for(i = 0; i < nameList.length; i++){
        var element = nameList[i];
        var elementLength = element.length;
        var megaLength = megaElement.length;
    
        if(megaLength <= elementLength){
            megaElement = element;
        }
    }
    return megaElement;
}
