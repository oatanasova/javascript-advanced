class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        let found = this.flights.find(name => name.flightNumber === flightNumber);

        if (found) {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        }

        this.flights.push({ flightNumber, destination, departureTime, price });
        return `Flight ${flightNumber} to ${destination} has been added to the system.`
    }

    bookFlight(passengerName, flightNumber) {
        let found = this.flights.find(name => name.flightNumber === flightNumber);

        if (!found) {
            return `Flight ${flightNumber} is not available for booking.`;
        }

        let booking = { passengerName, flightNumber };
        this.bookings.push(booking);
        this.bookingsCount++;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    }

    cancelBooking(passengerName, flightNumber) {
        let found = this.bookings.find(name => name.flightNumber === flightNumber);

        if (!found) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        }

        let index = this.bookings.indexOf(found);
        this.bookings.splice(index, 1);
        this.bookingsCount--;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    }

    showBookings(criteria) {
        if (this.bookings.length === 0) {
            throw new Error(`No bookings have been made yet.`);
        }
        let found = [];
        let output = '';
        if (criteria === 'all') {
            output += `All bookings(${this.bookingsCount}):\n`
            output += this.bookings.map((e) => `${e.passengerName} booked for flight ${e.flightNumber}.`).join('\n')
        }

        if (criteria === 'cheap') {
            found = this.bookings.filter(booking => {
                const flight = this.flights.find(
                    flight => flight.flightNumber === booking.flightNumber);
                return flight.price <= 100;
            });

            if (found.length === 0) {
                return "No cheap bookings found.";
            } else {
                output += `Cheap bookings:\n`;
                output += found.map(e => `${e.passengerName} booked for flight ${e.flightNumber}.`).join('\n');
            }
        }

        if (criteria === 'expensive') {
            found = this.bookings.filter(booking => {
                const flight = this.flights.find(
                    flight => flight.flightNumber === booking.flightNumber);
                return flight.price > 100;
            });

            if (found.length === 0) {
                return "No expensive bookings found.";
            } else {
                output += `Expensive bookings:\n`;
                output += found.map(e => `${e.passengerName} booked for flight ${e.flightNumber}.`).join('\n');
            }
        }

        return output;
    }

}