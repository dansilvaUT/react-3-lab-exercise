import { Component } from 'react';

class ButtonMenu extends Component {

    delete = () => {
        if (this.props.index === this.props.data.length - 1) {
            alert('Cannot delete this card');
        } else {
            this.props.delete(this.props.index)
        }
    }

    render() {
        return (

            <section className="btn-section">
                <button className="link-btn prev-btn" onClick={() => this.props.prev()}>Previous</button>
                <button className="btn">Edit</button>
                <button className="btn" onClick={() => this.delete()}>Delete</button>
                <button className="btn">New</button>
                <button className="link-btn next-btn" onClick={() => this.props.next()}>Next</button>
            </section>
        )
    }

}

export default ButtonMenu;