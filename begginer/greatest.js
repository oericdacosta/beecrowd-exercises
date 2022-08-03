function main(){
    let number1 = 1;
    let number2 = 3;
    let number3 = 2;

    (number1 >= number2 && number3 >= number2) ? console.log(theGreatest(number1, number3)) : 
    (number1 >= number2 && number3 <= number2) ? console.log(theGreatest(number1, number2)) : 
    console.log(theGreatest(number2, number3));
}

let theGreatest = (num1, num2) => ((num1 + num2 + Math.abs(num1 - num2)))/2;

main();