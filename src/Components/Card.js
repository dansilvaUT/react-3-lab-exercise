import ButtonMenu from './ButtonMenu';
import { Component } from 'react';

class Card extends Component {
    constructor() {
        super();
        this.state = {
            index: 0
        }

        this.nextCard = this.nextCard.bind(this);
        this.prevCard = this.prevCard.bind(this);
    }

    nextCard() {
        if (this.state.index === this.props.data.length - 1) {
            alert(`No more cards to display!`);
        } else {
            this.setState({ index: this.state.index + 1 });
        }
    }

    prevCard() {
        if (this.state.index === 0) {
            alert(`No more cards to display that way!`);
        } else {
            this.setState({ index: this.state.index - 1 });
        }
    }

    render() {
        return (
            <section className="container">
                <section className="card-container">
                    <span className="number-display">{this.state.index + 1}/{this.props.data.length}</span>
                    <h2 className="name">{this.props.data[this.state.index].name.first} {this.props.data[this.state.index].name.last}</h2>
                    <p><span className="heading-names">From: </span>
                        {this.props.data[this.state.index].city}, {this.props.data[this.state.index].country}</p>
                    <p><span className="heading-names">Job Title: </span>
                        {this.props.data[this.state.index].title}</p>
                    <p><span className="heading-names">Employer:</span>
                        {this.props.data[this.state.index].employer}</p>
                    <p><span className="heading-names">Favorite Movies:</span></p>
                    <ol>
                        {this.props.data[this.state.index].favoriteMovies.map((movie, index) => (
                            <li key={index}>{movie}</li>
                        ))}
                    </ol>
                </section>
                <ButtonMenu
                    next={this.nextCard}
                    prev={this.prevCard}
                    delete={this.props.delete}
                    index={this.state.index}
                    data={this.props.data}
                />
            </section>
        )
    }
}

export default Card;