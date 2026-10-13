function solve(input){
    let arr = input.match(/\w+/g);
    let result = [];
    
    for(let el of arr){
        el = el.toUpperCase();
        result.push(el);
    }

    console.log(result.join(', '));   
}

solve('Hi, how are you?');
solve('hello');