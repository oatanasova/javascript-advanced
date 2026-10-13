function printDeckOfCards(cards) {
    let deck = [];

    for (let card of cards) {
        try {
            let suit = card.slice(-1);
            let face = card.slice(0, -1);
            let newCard = createCard(face, suit);
            deck.push(newCard);

        } catch {
            return console.log(`Invalid card: ${card}`);
        }
    }

    console.log(deck.join(' '));
    

    function createCard(face, suit) {
        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let validSuits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };

        if (!validFaces.includes(face)) {
            throw new Error('Error');
        }

        if (!validSuits[suit]) {
            throw new Error('Error');
        }

        let unicodeSuit = validSuits[suit];

        return {
            face: face,
            suit: unicodeSuit,

            toString() {
                return this.face + this.suit;
            }
        };;
    }
}


printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);