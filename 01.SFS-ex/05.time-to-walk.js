function solve(steps, stride, speed) {

    let distance = steps * stride;
    let speedMS = speed / 3.6;

    let timeInSeconds = distance / speedMS;
    let breaks = Math.floor(distance / 500);

    let totalTime = timeInSeconds + (breaks * 60);

    let hours = Math.floor(totalTime / 3600);
    let minutes = Math.floor((totalTime % 3600) / 60);
    let seconds = Math.round(totalTime % 60);

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    console.log(`${hours}:${minutes}:${seconds}`);
    
}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);