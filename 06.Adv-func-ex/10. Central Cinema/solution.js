function solve() {
    let addMovieName = document.querySelectorAll('#container input')[0];
    let addHall = document.querySelectorAll('#container input')[1];
    let addTicketPrice = document.querySelectorAll('#container input')[2];
    let onScreenBtn = document.querySelector('#container button');

    let movieSection = document.querySelector('#movies ul');
    let archiveSection = document.querySelector('#archive ul');
    let clearBtn = document.querySelector('#archive button');

    onScreenBtn.addEventListener('click', addMovie);

    clearBtn.addEventListener('click', () => {
        archiveSection.innerHTML = '';
    });

    function addMovie(event) {
        event.preventDefault();

        let movieName = addMovieName.value.trim();
        let hall = addHall.value.trim();
        let ticketPrice = addTicketPrice.value.trim();

        if (!movieName || !hall || !ticketPrice || isNaN(Number(ticketPrice))) {
            return;
        }

        let movieEntry = createMovieEntry(movieName, hall, ticketPrice);
        movieSection.appendChild(movieEntry);

        addMovieName.value = '';
        addHall.value = '';
        addTicketPrice.value = '';
    }

    function createMovieEntry(movie, hall, price) {
        let entry = document.createElement('li');

        entry.innerHTML = `
            <span>${movie}</span>
            <strong>Hall: ${hall}</strong>
            <div>
                <strong>${Number(price).toFixed(2)}</strong>
                <input placeholder="Tickets Sold">
                <button>Archive</button>
            </div>`;

        let archiveBtn = entry.querySelector('button');
        archiveBtn.addEventListener('click', () => archiveMovie(entry));

        return entry;
    }

    function archiveMovie(entry) {
        let ticketSoldInput = entry.querySelector('input');
        let ticketSold = ticketSoldInput.value.trim();
        
        if (!ticketSold || isNaN(Number(ticketSold))) return;
        
        let movie = entry.querySelector('span').textContent;
        let price = Number(entry.querySelector('div strong').textContent);
        let total = Number(ticketSold) * price;

        let archived = document.createElement('li');

        archived.innerHTML = `
            <span>${movie}</span>
            <strong>Total amount: ${total.toFixed(2)}</strong>
            <button>Delete</button>`;

        let deleteBtn = archived.querySelector('button');
        deleteBtn.addEventListener('click', deleteMovie);

        archiveSection.appendChild(archived);
        entry.remove();
    }

    function deleteMovie(event) {
        event.target.parentElement.remove();
    }
}