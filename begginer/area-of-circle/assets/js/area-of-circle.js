function main(){
    let form = document.querySelector(".form");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        let inputRadius = event.target.querySelector("#radius");
        let radius = Number(inputRadius.value);
        if(!radius){
            setResult(`this is not an allowed value`, false);
            return;
        }
        let pi = Math.PI;
        let areaOfCircle = setCircleArea(radius, pi);
        let message = `Area = ${areaOfCircle}`;
        setResult(message, true);
    })
}

function setResult(message, state){
    let result = document.querySelector(".resultado");
    result.innerHTML = '';
    result.classList.add("right");

    if(!state){
        result.classList.add("bad");
    }

    result.innerHTML = message;
}

let setCircleArea = (radius, pi) => (pi*(Math.pow(radius,2))).toFixed(4);

main();