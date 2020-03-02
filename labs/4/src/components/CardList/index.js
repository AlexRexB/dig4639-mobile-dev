import React from "react"
import Card from "../Card/index.js"
import cards from "./data.json"

class CardList extends React.Component {
    constructor(props) {
        super(props)
        this.state = cards
    }

    removeCard (content) {
        console.log(content)
        let cards = this.state.cards
        console.log(cards)
        cards = cards.filter((v) => v.content !== content)
        console.log(cards)
        this.setState({cards})
    }

    render() {
        return (
            <div>
            {this.state.cards.map(card => <Card key={card.content} content={card.content} 
            removeCard={ () => this.removeCard(card.content)}/>)  }
            </div>
        )
    }
}

export default CardList