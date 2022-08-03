function main(){
    let form = document.querySelector(".form");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        let a = Number((event.target.querySelector("#productA")).value);
        let b = Number((event.target.querySelector("#productB")).value);
        let c = Number((event.target.querySelector("#productC")).value);
        let d = Number((event.target.querySelector("#productD")).value);

        if(!a || !b || !c || !d){
            setResult("This is not allowed", false);
            return;
        }

        let result = differenceofProduct(product(a,b), product(c, d));

        let message = `Difference = ${result}`;

        setResult(message, true);
    })
}

function setResult(message, isValid){
    let result = document.querySelector(".result");

    (isValid === true) ? result.classList.add("right") : result.classList.add("bad");

    result.innerHTML = message;
}

let product = (a, b) => a * b;
let differenceofProduct = (productA, productB) => productA - productB;

main();