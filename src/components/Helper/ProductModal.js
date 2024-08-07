// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addItem } from '../../redux/slices/cartSlice';
// import '../../style/ProductModal.css';

// const ProductModal = ({ open, handleClose, product }) => {
//   const [quantity, setQuantity] = useState(1);
//   const dispatch = useDispatch();

//   if (!open || !product) return null;

//   const handleAddToCart = () => {
//     dispatch(addItem({ ...product, quantity }));
//     handleClose();
//   };

//   return (
//     <div className="modal" onClick={handleClose}>
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         <span className="close" onClick={handleClose}>&times;</span>
//         <div className='wrapp-modal'>
//           <div className='wrapp-modal__image'>
//             <img className='wrapp-modal__img' src={product.image} alt={product.name}></img>
//           </div>
//           <div className='wrapp-modal_info'>
//             <div className='wrapp-modal_title'>{product.name}</div>
//             <div className='wrapp-modal_price'>${product.price}</div>
//             <div className='wrapp-modal_text'>
//               Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.
//             </div>
//             <div className='quantity'>
//               <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
//               <span>{quantity}</span>
//               <button onClick={() => setQuantity(quantity + 1)}>+</button>
//             </div>
//             <button onClick={handleAddToCart}>Add to Cart</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductModal;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import '../../style/ProductModal.css';

const ProductModal = ({ open, handleClose, product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  if (!open || !product) return null;

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity }));
    handleClose(); // Закрываем модальное окно после добавления товара в корзину
  };

  return (
    <div className="modal" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={handleClose}>&times;</span>
        <div className='wrapp-modal'>
          <div className='wrapp-modal__image'>
            <img className='wrapp-modal__img' src={product.image} alt={product.name}></img>
          </div>
          <div className='wrapp-modal_info'>
            <div className='wrapp-modal_title'>{product.name}</div>
            <div className='wrapp-modal_price'>${product.price}</div>
            <div className='wrapp-modal_text'>
              {product.description}
            </div>
            <div className='quantity'>
              <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;






