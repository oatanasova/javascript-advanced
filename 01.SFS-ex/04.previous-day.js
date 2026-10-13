function solve(year, month, day){
    let newYear = new Date(year, month, day-1).getFullYear();
    let newMonth = new Date(year, month, day-1).getMonth();
    let newDay = new Date(year, month, day-1).getDate();

    if (day === 1){
        newDay = new Date(year, month-1, 0).getDate();
        // newMonth = new Date(year, month, 0).getMonth();
    }
console.log(`${newYear}-${newMonth}-${newDay}`);

}

solve(2016, 10, 1);
solve(2015, 5, 10);