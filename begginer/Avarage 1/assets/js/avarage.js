function main(){
    let form = document.querySelector(".form");
    let noteWeight1 = 3.5;
    let noteWeight2 = 7.5;

    form.addEventListener("submit", function(event){
        event.preventDefault();

        let inputGrade1 = event.target.querySelector("#grade1");
        let inputGrade2 = event.target.querySelector("#grade2");
        let grade1 = Number(inputGrade1.value);
        let grade2 = Number(inputGrade2.value);

        if(!grade1 || !grade2){
            setResult(`This value is not allowed`, false);
            return
        }

        let weightedAverage = setWeightedAverage(grade1, grade2, noteWeight1, noteWeight2);
        let message = `Avarage = ${weightedAverage}`

        setResult(message, true);


    })
}

let setWeightedAverage = (grade1, grade2, noteWeight1, noteWeight2) => (((grade1 * noteWeight1)+(grade2 * noteWeight2))/(noteWeight1 + noteWeight2)).toFixed(5);

function setResult(message, isValid){
    let result = document.querySelector(".result");

    (isValid === true) ? result.classList.add("right") : result.classList.add("bad");

    result.innerHTML = message;
}

main();