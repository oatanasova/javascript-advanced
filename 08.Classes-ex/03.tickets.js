function solve(ticketArray, sorting) {
    class Tickets {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    let result = [];

    for (let ticket of ticketArray) {
        let [destination, price, status] = ticket.split('|');
        let currDestination = new Tickets(destination, price, status);
        result.push(currDestination);
    }

    return result.sort((a, b) => {
        if (sorting === 'price') {
            return a[sorting] - b[sorting];
        } else {
            return a[sorting].localeCompare(b[sorting]);
        }
    });
}

// return ticketArray
//     .map((command, index) => {
//         let [destination, price, status] = command.split('|');
//         return { ticket: new Tickets(destination, price, status), index };
//     })
//     .sort((a, b) => {
//         let left = a.ticket[sort];
//         let right = b.ticket[sort];

//         let comparison = typeof left === 'number' ? left - right : left.localeCompare(right);

//         return comparison || a.index - b.index;
//     })
//     .map(({ ticket }) => ticket);
// }


console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));


console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'));

