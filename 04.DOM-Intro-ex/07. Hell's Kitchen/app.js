function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let textareaRef = document.querySelector('textarea');
   let bestRestRef = document.querySelector("#bestRestaurant p");
   let bestWorkerRef = document.querySelector("#workers p");



   function onClick() {
      let data = textareaRef.value;
      let restaurantData = JSON.parse(data);
      let result = {};

      for (let el of restaurantData) {
         let [name, workersData] = el.split(' - ');
         if (!result.hasOwnProperty(name)) {
            result[name] = {
               avgSalary: 0,
               bestSalary: 0,
               workers: []
            }
         }
         let workers = workersData.split(', ');
         let newWorkerList = createWorkerList(workers);
         result[name].workers = concatWorkerList(result[name].workers, newWorkerList);
         let salaryData = calculateRestaurantData(result[name].workers);

         result[name].avgSalary = salaryData.avgSalary;
         result[name].bestSalary = salaryData.bestSalary;

      }

      let [bestName, bestData] = findBestRestaurant(result);

      bestRestRef.textContent = `Name: ${bestName} Average Salary: ${bestData.avgSalary.toFixed(2)} Best Salary: ${bestData.bestSalary.toFixed(2)}`;

      let buffer = '';
      bestData.workers.sort((a, b) => b.salary - a.salary)
         .forEach(worker => buffer += `Name: ${worker.name} With Salary: ${worker.salary} `);

      bestWorkerRef.textContent = buffer.trim();
   }

   function findBestRestaurant(restaurantData) {
      return Object.entries(restaurantData)
      .sort((a, b) => b[1].avgSalary - a[1].avgSalary)[0];
   }

   function calculateRestaurantData(workersList) {
      let result = {
         avgSalary: 0,
         bestSalary: 0
      }

      let sum = 0;

      for (let worker of workersList) {
         let salary = worker.salary;
         sum += salary;

         if (result.bestSalary < salary) {
            result.bestSalary = salary;
         }
      }

      result.avgSalary = sum / workersList.length;

      return result;
   }


   function createWorkerList(data) {
      let result = [];

      for (let el of data) {
         let [name, salary] = el.split(' ');
         salary = Number(salary);
         result.push({ name, salary });
      }
      return result;
   }

   function concatWorkerList(oldWorkers, newWorkers) {
      return oldWorkers.concat(newWorkers);
   }
}

