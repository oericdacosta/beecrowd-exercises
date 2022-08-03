function main(){
    let a = 3.0;
    let b = 4.0;
    let c = 5.2;

    let areaOfRectangledTriangle = calcAreaRectangledTriangle(a, c);
    let areOfCircle = calcAreaCircle(c);
    let areaOfTrapezio = calcAreaTrape(a, b, c);
    let areaOfSquare = calcAreaSquare(b);
    let AreaRetangled = calcAreaRectan(a, b);

    console.log(areaOfRectangledTriangle, areOfCircle, areaOfTrapezio, areaOfSquare, AreaRetangled);
}

let calcAreaSquare = base => Math.pow(base, 2).toFixed(3);
let calcAreaTrape = (base1, base2, height) => (((base1 + base2) * height)/2).toFixed(3);
let calcAreaCircle = radius => (Math.PI * (Math.pow(radius,2))).toFixed(3);
let calcAreaRectan = (base, height) => (base * height).toFixed(3);
let calcAreaRectangledTriangle = (base, height) => ((base * height)/2).toFixed(3);

main();