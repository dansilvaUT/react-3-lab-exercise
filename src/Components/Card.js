import { Component } from 'react';
import ButtonMenu from './ButtonMenu';
//Import data form data.js file
import data from '../data';

class Card extends Component {
    constructor() {
        super();
        this.state = {
            list: data,
            index: 0
        }
        this.nextCard = this.nextCard.bind(this);
        this.prevCard = this.prevCard.bind(this);
    }

    nextCard() {
        if (this.state.index === 25) {
            alert('No more cards.');
        } else {
            this.setState({ index: this.state.index + 1 });
        }
    }

    prevCard() {
        if (this.state.index === 0) {
            alert('Can\'t go backward from 0');
        } else {
            this.setState({ index: this.state.index - 1 });
        }
    }

    render() {
        return (
            <section className='container'>
                <section className='card-container'>
                    <span className='number-display'>{this.state.index + 1} / {this.state.list.length}</span>
                    <h2 className='name'>
                        {this.state.list[this.state.index].name.first} {this.state.list[this.state.index].name.last}
                    </h2>
                    <p><span className='heading-names'>From:</span> {this.state.list[this.state.index].city}, {this.state.list[this.state.index].country}
                    </p>
                    <p><span className='heading-names'>Job Title:</span> {this.state.list[this.state.index].title}</p>
                    <p><span className='heading-names'>Employer:</span> {this.state.list[this.state.index].employer}</p>
                    <p><span className='heading-names'>Favorite Movies:</span></p>
                    <ol className='movie-list'>
                        {this.state.list[this.state.index].favoriteMovies.map((movies, index) => {
                            return <li key={index}>{movies}</li>
                        })}
                    </ol>
                </section>
                <ButtonMenu
                    next={this.nextCard}
                    prev={this.prevCard}
                />
            </section>
        )
    }
}

export default Card;