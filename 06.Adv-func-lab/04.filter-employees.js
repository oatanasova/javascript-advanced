function solve(data, criteria) {
    let dataParsed = JSON.parse(data);
    // my stupid way 
    //let result = {};
    //   if (criteria === 'all'){
    //     result = dataParsed;
    //   } else {
    //     let [criteriaKey, criteriaValue] = criteria.split('-');
    //     result = dataParsed.filter(employee => employee[criteriaKey] === criteriaValue);
    //   }
    // let entries = Object.entries(result);
    // for(let [id, entry] of entries){
    //     console.log(`${id}. ${entry.first_name} ${entry.last_name} - ${entry.email}`);
    // }

  //the better way - JS adv
    let [criteriaKey, criteriaValue] = criteria.split('-');
    let filtered = criteriaValue === 'all'
        ? dataParsed
        : dataParsed.filter(employee => employee[criteriaKey] === criteriaValue);

    filtered.forEach((employee, index) => {
        console.log(`${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
    });
}


solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female');
// console.log('-----------')
// solve(`[{
//     "id": "1",
//     "first_name": "Kaylee",
//     "last_name": "Johnson",
//     "email": "k0@cnn.com",
//     "gender": "Female"
//   }, {
//     "id": "2",
//     "first_name": "Kizzee",
//     "last_name": "Johnson",
//     "email": "kjost1@forbes.com",
//     "gender": "Female"
//   }, {
//     "id": "3",
//     "first_name": "Evanne",
//     "last_name": "Maldin",
//     "email": "emaldin2@hostgator.com",
//     "gender": "Male"
//   }, {
//     "id": "4",
//     "first_name": "Evanne",
//     "last_name": "Johnson",
//     "email": "ev2@hostgator.com",
//     "gender": "Male"
//   }]`,
//     'last_name-Johnson');