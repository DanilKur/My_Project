import React from 'react';
import './ProductModal.css';

const ProductModal = ({ open, handleClose, product }) => {
    if (!open) return null;

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="modal" onClick={handleClose}>
            <div className="modal-content" onClick={stopPropagation}>
                <span className="close" onClick={handleClose}>&times;</span>
                <h2>{product?.name}</h2>
                <p>{product?.description}</p>
            </div>
        </div>
    );
};

export default ProductModal;



