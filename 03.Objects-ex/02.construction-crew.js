function solve(workerObj) {
    if (workerObj.dizziness) {
        let waterNeeded = 0.1 * workerObj.weight * workerObj.experience;
        workerObj.levelOfHydrated += waterNeeded;
        workerObj.dizziness = false;
    } 

    return workerObj;
    
}

console.log(solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
));
console.log(solve({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}
));
console.log(solve({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}
));