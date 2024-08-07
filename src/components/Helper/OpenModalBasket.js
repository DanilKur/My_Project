// src/components/Helper/OpenModalBasket.js
import React from 'react';
import { useSelector } from 'react-redux';
import '../../style/OpenModalBasket.css';

const OpenModalBasket = ({ openBasket, handleBasketClose }) => {
  const { items } = useSelector((state) => state.cart);

  if (!openBasket) return null;

  const stopBasketPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-basket" onClick={handleBasketClose}>
      <div className="modal-basket-content" onClick={stopBasketPropagation}>
        <span className="close" onClick={handleBasketClose}>&times;</span>
        <div className='wrapp-modal-basket'>
          {items.length === 0 ? (
            <div>Your cart is empty</div>
          ) : (
            items.map(item => (
              <div key={item.id} className='basket-item'>
                <img src={item.image} alt={item.name} className='basket-item-image' />
                <div className='basket-item-details'>
                  <div className='basket-item-name'>{item.name}</div>
                  <div className='basket-item-quantity'>Quantity: {item.quantity}</div>
                  <div className='basket-item-price'>${item.price * item.quantity}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default OpenModalBasket;








