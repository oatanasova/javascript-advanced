function solve(currSpeed, area){

    let speedDiff = 0;
    let maxSpeed = 0;
    let status = '';

    switch(area){
        case "city": maxSpeed = 50; break;
        case "residential": maxSpeed = 20; break;
        case "interstate": maxSpeed = 90; break;
        case "motorway": maxSpeed = 130; break;
    }

    if(maxSpeed >= currSpeed){
        console.log(`Driving ${currSpeed} km/h in a ${maxSpeed} zone`);
        
    } else {
        speedDiff = currSpeed - maxSpeed;
        if(speedDiff <= 20){
            status = 'speeding';
        } else if(speedDiff <= 40){
            status = 'excessive speeding';
        } else if(speedDiff > 40){
            status = 'reckless driving';
        } 
        console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${maxSpeed} - ${status}`);
    }

}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');