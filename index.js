// Code your solution in this file!
function distanceFromHqInBlocks(value){
    const hQ = 42;
    const dist = value - hQ;
    const belowDist = 42 -value
    if (value > hQ){
        return dist
    }else{
        return belowDist

    }
}
    

distanceFromHqInBlocks()

function distanceFromHqInFeet(translation) {
    let block = distanceFromHqInBlocks(translation)
    const feet = 264
    const convertBlockToFeet = block * feet
    return convertBlockToFeet
}
distanceFromHqInFeet()

function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        const numOfFeet = ((destination - start) * 264)
        return numOfFeet
    } else {
        return ((start - destination) * 264)
    }
}

function calculatesFarePrice(start, destination) {
    let distanceCal = distanceTravelledInFeet(start, destination)
    if (distanceCal >= 0 && distanceCal <= 400) {
        return 0
    } else if (distanceCal > 400 && distanceCal <= 2000) {
        return 0.02 * (distanceCal - 400)
    } else if (distanceCal > 2000 && distanceCal <= 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
}

  
