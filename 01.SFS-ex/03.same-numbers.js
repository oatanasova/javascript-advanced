function solve(num){

    let input = num.toString();

    let currDigit = input[0];
    let isSame = true;
    let sum = 0;

    for(let digit of input){
        sum+=Number(digit);
        if(digit!== currDigit){
            isSame = false;            
    }
}

    console.log(isSame);
    console.log(sum);
    
}

solve(2222222);
solve(1234);