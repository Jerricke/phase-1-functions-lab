// Code your solution in this file!

function distanceFromHqInBlocks(num) {
    const hq = 42; 
    return Math.abs(42 - num);
}

function distanceFromHqInFeet(num) {
    const blocks = distanceFromHqInBlocks(num);
    return blocks * 264;
}

function distanceTravelledInFeet(num1,num2) {
    const blocks = Math.abs( num1 - num2 );
    return blocks * 264;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start,destination);
    if (distance <= 400) {
        return 0
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400 ) * 0.02
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far'
    }
}