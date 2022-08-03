function main(){

    let p1 = createPlane(1, 7);
    let p2 = createPlane(5, 9);

    let distanceBetweenPoints = calcDistancePoints(p1, p2);

    console.log(distanceBetweenPoints);
}

let calcDistancePoints = (p1, p2) => (Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2))).toFixed(4);

function createPlane(x, y){
    const plane = {
        x,
        y,
    }
    return plane;
}

main();