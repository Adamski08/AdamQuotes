import React from 'react';
import './Quote.css';
class Quote extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
        <div className="b-quotes__list-item">
            <i className="b-quotes__item-quote">{this.props.quote}</i>
            <p className="b-quotes__quote-author">{this.props.author}</p>
        </div>
        );
    }
}

export default Quote;