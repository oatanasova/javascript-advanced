class List {
    constructor() {
        this.items = [];
        this.size = 0;
    }

    add(num) {
        this.items.push(num);
        this.items.sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        if (index >= 0 && index <= this.size - 1) {
            this.items.splice(index, 1);
            this.size--;
        }
    }

    get(index) {
        if (index >= 0 && index <= this.size - 1) {
            return this.items[index];
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

// function createSortedList(){
//     let result = {number: [], size: 0};

//     result.add = function(num) {
//         this.number.push(num);
//         this.number.sort((a,b) => a-b);
//         this.size++;

//     }

//     result.remove = function(index) {
//         if(index >= 0 && index <= this.size - 1){
//             this.number.splice(index, 1);
//             this.size--;
//         }
//     }

//     result.get = function(index) {
//         if(index >= 0 && index <= this.size - 1){
//             return this.number[index];
//         }
//     }

//     return result;
// }
