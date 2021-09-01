
function printDeckOfCards(cards) {
    function createCard(face, suit) {
        const validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

        const validSuits = {
            "S": "\u2660",
            "H": "\u2665",
            "D": "\u2666",
            "C": "\u2663",
        };

        if (!validFaces.includes(face)) {
            throw Error(`${face}${suit}`);
        }
        if (!validSuits[suit]) {
            throw Error(`${face}${suit}`);
        }

        return (`${face}${validSuits[suit]}`);
    }
    try {
        const output = []
        cards.forEach(val => {
            val = Array.from(val)
            let face = val.splice(0, val.length - 1);
            face = face.join("")
            const suit = val.join("")

            output.push(createCard(face, suit))

        })
        console.log(output.join(" "))
    } catch(error) {
        console.log(`Invalid card: ${error.message}`)

    }
    

    
}
printDeckOfCards(['5S', '3D', 'QD', '1C'])