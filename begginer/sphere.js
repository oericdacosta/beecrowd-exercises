function main(){
    let radius = 3; // the way the input will be doesn't matter to the logic
    let pi = Math.PI;

    let volumeOfSphere = calculateVolumeSphere(radius, pi);

    console.log(volumeOfSphere);
}

let calculateVolumeSphere = (radius, pi) => ((4/3) * pi * (Math.pow(radius,3))).toFixed(3);

main()