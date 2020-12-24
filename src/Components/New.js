import { Component } from 'react';

class New extends Component {
    constructor() {
        super();
        this.state = {
            first: '',
            last: '',
            city: '',
            country: '',
            employer: '',
            title: ''

        }
    }

    handleFirstNameChange = (value) => {
        this.setState({ first: value });
    }

    handleLastNameChange = (value) => {
        this.setState({ last: value });
    }

    handleCityChange = (value) => {
        this.setState({ city: value });
    }

    handleCountryChange = (value) => {
        this.setState({ country: value });
    }

    handleJobTitleChange = (value) => {
        this.setState({ title: value });
    }

    handleEmployerChange = (value) => {
        this.setState({ employer: value });
    }

    //TODO ADD Object to data array
    //Find a way to increment id correctly. Use last element in array id
    render() {
        return (
            <section className="new-card">
                <form className="new-form">
                    <label>First Name:</label>
                    <input
                        type="text"
                        onChange={(e) => this.handleFirstNameChange(e.target.value)}
                        value={this.state.first}
                    />
                    <label >Last Name:</label>
                    <input
                        type="text"
                        onChange={(e) => this.handleLastNameChange(e.target.value)}
                        value={this.state.last} />
                    <label>What city are you from?</label>
                    <input
                        type="text"
                        onChange={(e) => this.handleCityChange(e.target.value)}
                        value={this.state.city} />
                    <label>What country is that in?</label>
                    <input
                        type="text"
                        onChange={(e) => this.handleCountryChange(e.target.value)}
                        value={this.state.country} />
                    <label>Job Title:</label>
                    <input
                        type="text"
                        onChange={(e) => this.handleJobTitleChange(e.target.value)}
                        value={this.state.title} />
                    <label>Employer</label>
                    <input
                        type="text"
                        onChange={(e) => this.handleEmployerChange(e.target.value)}
                        value={this.state.employer} />
                    <button>Submit</button>
                    <button>Clear</button>
                </form>

            </section>
        )
    }
}

export default New;