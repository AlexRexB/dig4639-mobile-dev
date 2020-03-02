import "./index.css"
import React from "react"

class Card extends React.Component {
    render() {
        return (
            <div className = "card">
                <h3>Lab 4</h3>
                <p>{this.props.content}</p>
                <button value='x' className = "close" onClick={() => this.props.removeCard()} >x</button>
            </div>
        )
    }
}
export default Card;