// Code your solution in this file!
function distanceFromHqInBlocks(street){
    let hq = 42;
    let distance = Math.abs(42-street);
    return distance;
}

function distanceFromHqInFeet(street){
    let distanceFeet = distanceFromHqInBlocks(street) * 264;
    return distanceFeet;    
}

function distanceTravelledInFeet(start, destination){
    let travel = Math.abs(start-destination) * 264
    return travel;
}

function calculatesFarePrice(start, destination){
    let fareDistance = distanceTravelledInFeet(start, destination);
    if (fareDistance <= 400){
        return 0;
    }
    else if (fareDistance <= 1999){
        fareDistance = fareDistance-400;
        return fareDistance * 0.02;
    }
    else if (fareDistance <= 2500){
        return 25;
    }
    else return `cannot travel that far`;
}
