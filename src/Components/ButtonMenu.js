import { Component } from 'react';
class ButtonMenu extends Component {

    render() {
        return (
            <section className='btn-section'>
                <button onClick={this.props.prev} className='link-btn prev-btn'>&lt; Previous</button>
                <button className='btn'>Edit</button>
                <button className='btn'>Delete</button>
                <button className='btn'>New</button>
                <button onClick={this.props.next} className='link-btn next-btn'>Next &gt;</button>
            </section>
        )
    }
}

export default ButtonMenu;