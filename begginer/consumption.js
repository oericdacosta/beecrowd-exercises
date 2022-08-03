function main(){
    let totalDistance = 500;
    let spentFuelTotal = 35.0;
    let consumption = averageConsumption(totalDistance, spentFuelTotal);

    console.log(consumption);
}

let averageConsumption = (km, l) => (km / l).toFixed(3);

main();