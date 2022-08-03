function main(){
    let num1 = 10.3;
    let num2 = 203;
    let num3 = 5;

    
    let bhaskara = calcBhaskara(num1, num2, num3);
    let roots = checkRoots(bhaskara);
    //console.log(roots);
    if(Number.isNaN(roots) || num1 === 0){
        console.log("impossível calcular"); 
        return;
    }
    let rootsOfBhaskara =  calcRoot(num1, num2, bhaskara);

    console.log(rootsOfBhaskara);

    /*

    if(Number.isNaN(roots)) return;

    let rootsOfBhaskara =  calcRoot(num1, num2, bhaskara);

    (roots === 1) ? console.log(rootsOfBhaskara.x) : console.log(rootsOfBhaskara.x1, rootsOfBhaskara.x2);*/
}



function calcRoot(a, b, bhaskara){
    if(bhaskara > 0){
        let roots = {
            x1: ((-b + Math.sqrt(bhaskara))/(2*a)).toFixed(5),
            x2: ((-b - Math.sqrt(bhaskara))/(2*a)).toFixed(5),
        }
        return roots;
    }

    let root = {
        x: (-b + Math.sqrt(bhaskara))/2,
    }

    return root;
}
let checkRoots = (bhaskara) => (bhaskara > 0) ? 2 : (bhaskara < 0) ? NaN : 1;

let calcBhaskara = (a, b, c) => Math.pow(b,2) - (4 * a * c);

main();