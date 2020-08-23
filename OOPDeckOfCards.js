class Deck{
    constructor(){  
        this.cards = []
    }

    populate(){
        this.cards = []
            let suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds']
            for(let j = 0; j < 4; j++){
                for(let i = 1; i <= 13; i++){
                    this.cards.push({[suits[j]]: i})
                }
            }
    }

    shuffle(){
        this.cards.sort(() => Math.random() - 0.5);
    }

    draw(){
        return this.cards.pop()
    }

}

deck = new Deck
deck.populate()
deck.shuffle()
console.log(deck.cards)
console.log(deck.draw())
console.log(deck.draw())
console.log(deck.draw())
