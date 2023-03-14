import './cards.css'
function Cards(props) {
    return (
        <div className='wraps'>
            <div className="cardsls">
                <div className="imgs">
                    <img src={props.image} alt="" />
                </div>
                <div className="names">
                    <h3>{props.name}</h3>
                </div>
            </div>
        </div>
    )
}
export default Cards