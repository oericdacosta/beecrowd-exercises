function main(){
    let form = document.querySelector(".form");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        const product1 = {
            code: Number((document.querySelector("#productCode1")).value),
            numberOfUnits: Number((document.querySelector("#NumberOfUnits1")).value),
            price: Number((document.querySelector("#pricePerUnit1")).value),
        }
        const product2 = {
            code: Number((document.querySelector("#productCode2")).value),
            numberOfUnits: Number((document.querySelector("#NumberOfUnits2")).value),
            price: Number((document.querySelector("#pricePerUnit2")).value),
        }

        let amount = calculateAmount(product1.numberOfUnits, product1.price, product2.numberOfUnits, product2.price);

        message = `Value to pay: RS${amount}`;

        setResult(message, true);

    })
}

function setResult(message, isValid){
    let result = document.querySelector(".result");

    (isValid === true) ? result.classList.add("right") : result.classList.add("bad");

    result.innerHTML = message;
}

let calculateAmount = (numberOfUnits1, price1, numberOfUnits2, price2) => ((numberOfUnits1 * price1) + (numberOfUnits2 * price2)).toFixed(2);



main();