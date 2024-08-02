// import React from 'react';
// import './ProductModal.css';
// import CartImage from './../../image/cart.jpg';

// const ProductModal = ({ open, handleClose, product }) => {
//     if (!open) return null;

//     const stopPropagation = (e) => {
//         e.stopPropagation();
//     };

//     return (
//         <div className="modal" onClick={handleClose}>
//             <div className="modal-content" onClick={stopPropagation}>
//                 <span className="close" onClick={handleClose}>&times;</span>
//                 <div className='wrapp-modal'>
//                     <div className='wrapp-modal__image'>
//                         <img className='wrapp-modal__img' src={CartImage} alt='Product'></img>
//                     </div>
//                     <div className='wrapp-modal_info'>
//                         <div className='wrapp-modal_title'>
//                             Cheesecake
//                         </div>
//                         <div className='wrapp-modal_price'>
//                             $50
//                         </div>
//                         <div className='wrapp-modal_text'>
//                             Body text for whatever you`d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.
//                         </div>

//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductModal;

import React, { useState } from 'react';
import './ProductModal.css';
import CartImage from './../../image/cart.jpg';

const ProductModal = ({ open, handleClose, product }) => {
    const [quantity, setQuantity] = useState(1);

    if (!open) return null;

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    return (
        <div className="modal" onClick={handleClose}>
            <div className="modal-content" onClick={stopPropagation}>
                <span className="close" onClick={handleClose}>&times;</span>
                <div className='wrapp-modal'>
                    <div className='wrapp-modal__image'>
                        <img className='wrapp-modal__img' src={CartImage} alt='Product'></img>
                    </div>
                    <div className='wrapp-modal_info'>
                        <div className='wrapp-modal_title'>
                            Cheesecake
                        </div>
                        <div className='wrapp-modal_price'>
                            $50
                        </div>
                        <div className='wrapp-modal_text'>
                            Body text for whatever you`d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.
                        </div>
                        <div className="quantity-control">
                            <div>
                                <button onClick={decreaseQuantity}>-</button>
                                    <span>{quantity}</span>
                                <button onClick={increaseQuantity}>+</button>
                            </div> 
                        </div>
                        <div className='modal-btn'>
                            <button>
                                Додати
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;




