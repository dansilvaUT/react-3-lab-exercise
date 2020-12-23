const ButtonMenu = props => {
    console.log(props.index)
    console.log(props.delete)
    return (
        
        <section className="btn-section">
            <button className="link-btn prev-btn" onClick={() => props.prev()}>Previous</button>
            <button className="btn">Edit</button>
            <button className="btn" onClick={()=> props.delete(props.index)}>Delete</button>
            <button className="btn">New</button>
            <button className="link-btn next-btn" onClick={() => props.next()}>Next</button>
        </section>
    )
}

export default ButtonMenu;