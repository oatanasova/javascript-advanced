function solve(num1 , num2){
    let smallerNumber = Math.min(num1, num2);

    for( let n = smallerNumber; n>= 1; n--){
        if(num1 % n === 0 && num2 % n === 0){
            console.log(n);
            break;
        }
    }

}

solve(15,5);
solve(2154,458);