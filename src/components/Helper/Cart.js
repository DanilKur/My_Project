import React, { useState, useEffect } from 'react';
import CartImage from './../../image/cart.jpg';
import ProductModal from '../Helper/ProductModal';
import '../../components/Menu/Menu.css';

const Cart = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        console.log("modalOpen state:", modalOpen);
    }, [modalOpen]);

    const handleOpenModal = () => {
        setSelectedProduct({
            name: 'Cheesecake',
            description: 'Body text for whatever you`d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.'
        });
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedProduct(null);
    };

    const handleAddClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="wrapp__cart" onClick={handleOpenModal}>
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
                <div className='wrapp__cart-price'>
                    <div className='wrapp__cart-price-text'>
                        $50
                    </div>
                </div>
                <div className="wrapp__cart-info-button">
                    <button className='wrapp__cart-info-button-text' onClick={handleAddClick}>Додати</button>
                </div>
            </div>
            <ProductModal open={modalOpen} handleClose={handleCloseModal} product={selectedProduct} />
        </div>
    );
};

export default Cart;





