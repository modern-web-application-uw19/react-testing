import React from 'react';

export default class Card extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <button onClick={this.props.clickHandler}>Click me!</button>
            </div>
        )
    }
}