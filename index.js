// Code your solution in this file!
const Hq = 42
function distanceFromHqInBlocks(streetNumber){
    console.log(streetNumber - Hq)
    let distance = streetNumber - Hq
    if(distance < 0){
        distance = distance * -1
    }
    return distance
}
function distanceFromHqInFeet(streetNumber){
    console.log(streetNumber - Hq)
    let distance = streetNumber - Hq  
    if(distance < 0){
        distance = distance * -1
    }
    return distance * 264
}
function distanceTravelledInFeet(streetNumber1, streetNumber2){
    console.log(streetNumber1 - streetNumber2)
    let distance = streetNumber1 - streetNumber2
    if(distance < 0){
        distance = distance * -1
    }
    return distance * 264
}
function calculatesFarePrice(streetNumber1, streetNumber2){
    let feet = distanceTravelledInFeet(streetNumber1, streetNumber2)
    let sample = 400
    if(feet < 400){
        return 0
    }
    else if(feet >= 400 && feet < 2000){
        return (feet - sample) * 0.02
    }
    else if(feet >= 2000 && feet < 2500){
    return 25
    }
    else {
        return 'cannot travel that far'
    }
}