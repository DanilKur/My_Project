// src/components/Menu/Menu.js
import './Menu.css';
import React, { useContext, useState } from 'react';
import { ScrollContext } from '../Helper/ScrollContext';
import Cart from '../Helper/Cart';
import ProductModal from '../Helper/ProductModal';
import CartImage from './../../image/cart.jpg';

const Menu = () => {
  const { cardsRef } = useContext(ScrollContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="menu" ref={cardsRef}>
      <div className="container">
        <div className="wrapp">
          <div className="wrapp__title">
            <div className='wrapp__title-text'>Menu</div>
          </div>
          <div onClick={() => handleOpenModal({ id: 1, name: 'Cheesecake', price: 50, image: CartImage })}>
            <Cart />
          </div>
        </div>
      </div>
      <ProductModal open={isModalOpen} handleClose={handleCloseModal} product={selectedProduct} />
    </div>
  );
};

export default Menu;







