class Hotel {

    constructor(initialBudget) {
        this.initialBudget = initialBudget;
        this.roomAvailability = {};
        this.supplyStock = {};
    }

    restockSupplies(supplies) {
        let output = [];
        for (let supply of supplies) {
            let [product, qty, totalPrice] = supply.split(' ');
            qty = Number(qty);
            totalPrice = Number(totalPrice);

            if (totalPrice <= this.initialBudget) {
                this.initialBudget -= totalPrice;
                if (!this.supplyStock[product]) {
                    this.supplyStock[product] = 0;
                }
                this.supplyStock[product] += qty;

                output.push(`Successfully stocked ${qty} ${product}`)

            } else {
                output.push(`There was not enough money to restock ${qty} ${product}`)
            }
        }
        return output.join('\n');
    }

    addRoomType(roomType, neededSupplies, pricePerNight) {
        if (Object.keys(this.roomAvailability).includes(roomType)) {
            return `The ${roomType} is already available in our hotel, try something different.`
        }
        this.roomAvailability[roomType] = { neededSupplies, pricePerNight };
        return `Great idea! Now with the ${roomType}, we have ${Object.keys(this.roomAvailability).length} types of rooms available, any other ideas?`
    }

    showAvailableRooms() {
        let rooms = Object.entries(this.roomAvailability);
        if (rooms.length === 0) {
            return 'Our rooms are not ready yet, please come back later...'
        }

        // for (let room of rooms) {
        //     return
        // }

        return rooms.map(([type, room]) => `${type} - $ ${room.pricePerNight}`).join('\n');
    }

    bookRoom(roomType) {
        if (!Object.keys(this.roomAvailability).includes(roomType)) {
            return `There is no ${roomType} available, would you like to book another room?`
        }

        let room = this.roomAvailability[roomType];
        for(let supply of room.neededSupplies){
            let [name, qty] = supply.split(' ');
            if(!Object.keys(this.supplyStock).includes(name) || this.supplyStock[name]< Number(qty)){
                return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`
            }
        }

        return `Your booking for ${roomType} has been confirmed! The price is $${room.pricePerNight} per night.`
    }

}


let hotel = new Hotel(500);

console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));

console.log(hotel.showAvailableRooms());

console.log(hotel.bookRoom("Apartment"));
console.log(hotel.bookRoom("Deluxe Suite"));
