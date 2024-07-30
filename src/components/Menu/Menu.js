import './Menu.css'
import React, { useContext } from 'react';
import { ScrollContext } from '../Helper/ScrollContext';
import Cart from '../Helper/Cart';
import BasicModal from '../Helper/BasicModal';


const Menu = () => {

    const { cardsRef } = useContext(ScrollContext);

    return (
        <div className="menu" ref={cardsRef}>
            <div className="container">
                <div className="wrapp"> 
                    <div className="wrapp__title">
                        <div className='wrapp__title-text'>Menu</div>
                    </div>
                    <BasicModal/>
                    <BasicModal/>
                    <BasicModal/>
                    <BasicModal/>
                    <BasicModal/>
                </div>
            </div>
        </div>
    )
}

export default Menu;