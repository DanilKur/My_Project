import './Menu.css'
import React, { useContext } from 'react';
import { ScrollContext } from '../Helper/ScrollContext';
import Cart from '../Helper/Cart';

const Menu = () => {
    const { cardsRef } = useContext(ScrollContext);

    return (
        <div className="menu" ref={cardsRef}>
            <div className="container">
                <div className="wrapp"> 
                    <div className="wrapp__title">
                        <div className='wrapp__title-text'>Menu</div>
                    </div>
                    <Cart/>
                    <Cart/>
                    <Cart/>
                    <Cart/>
                    <Cart/>
                </div>
            </div>
        </div>
    )
}

export default Menu;
