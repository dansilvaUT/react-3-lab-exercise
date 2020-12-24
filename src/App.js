import Header from './Components/Header';
import Card from './Components/Card';
import New from './Components/New';
import data from './data';
import { Component } from 'react';
import './App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
            data: data
        }
        this.deleteCard = this.deleteCard.bind(this)
    }

    deleteCard(index) {
        let newList = this.state.data.slice();
        newList.splice(index, 1);
        this.setState({ data: newList });
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Card
                    data={this.state.data}
                    delete={this.deleteCard}
                />
                <New />
            </div>
        )
    }
}

export default App;