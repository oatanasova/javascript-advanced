function solve(pies, firstPie, lastPie) {
    let firstIndex = pies.indexOf(firstPie);
    let lastIndex = pies.indexOf(lastPie);

    let result = pies.slice(firstIndex, lastIndex + 1);

    return result;

}

console.log(solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'));
console.log(solve(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'));