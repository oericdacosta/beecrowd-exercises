function main(){
    let form = document.querySelector(".form");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        let numberEmployee = Number((event.target.querySelector("#employeeNumber")).value);
        let workedHours = Number((event.target.querySelector("#workedHours")).value);
        let receivedPerHour = Number((event.target.querySelector("#receivePerHour")).value);

        if(!numberEmployee || !workedHours || !receivedPerHour){
            setResult("This is not allowed", false);
            return;
        }

        let salary = calculateSalary(workedHours, receivedPerHour);
        let message = `Number = ${numberEmployee} Salary = U$ ${salary}`;
        setResult(message, true);

    })
}

function setResult(message, isValid){
    let result = document.querySelector(".result");

    (isValid === true) ? result.classList.add("right") : result.classList.add("bad");

    result.innerHTML = message;
}

let calculateSalary = (workedHours, receivedPerHour) => (workedHours * receivedPerHour).toFixed(2);

main();