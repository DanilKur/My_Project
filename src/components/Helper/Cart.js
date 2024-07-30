import CartImage from './../../image/cart.jpg'
import '../../components/Menu/Menu.css'
const Cart = () => {
    return (
        <div className="wrapp__cart">
            <div className="wrapp__cart-img">
                <img className='image-cart' src={CartImage} alt='ImageCart'></img>
            </div>
            <div className="wrapp__cart-info">
                <div className="wrapp__cart-info-title">
                    <div className='wrapp__cart-info-title-text'>Cheesecake</div>
                </div>
                <div className="wrapp__cart-info-text"> 
                    <div> Body text for whatever you`d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</div>
                </div>
                <div className="wrapp__cart-info-button">
                    <button className='wrapp__cart-info-button-text'>Додати</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;