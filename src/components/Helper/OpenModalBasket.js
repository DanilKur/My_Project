import React from 'react';
import '../../style/OpenModalBasket.css';

const OpenModalBasket = ({ openBasket, handleBasketClose }) => {
    if (!openBasket) return null;

    const stopBasketPropagation = (e) => {
        e.stopPropagation();
    };

    return (
    
        <div className="modal-basket" onClick={handleBasketClose}>
            <div className="modal-basket-content" onClick={stopBasketPropagation}>
                <span className="close" onClick={handleBasketClose}>&times;</span>
                <div className='wrapp-modal-basket'>
                    

                </div>
            </div>
        </div>
    )
}

export default OpenModalBasket;







