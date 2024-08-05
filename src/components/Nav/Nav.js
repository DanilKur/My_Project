import React, { useState } from 'react';
import './Nav.css'
import logo from './../../image/Logo1.png'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import OpenModalBasket from '../Helper/OpenModalBasket';

const Nav = () => {

    const [modalBasketOpen, setmodalBasketOpen ] = useState(false)
    const [selectedBasket, useselectedBasket] = useState(null)

    const handleOpenBasket = () => {
        useselectedBasket({
            name: 'Basket'
        });
        setmodalBasketOpen(true);

    }

    const handleCloseBasket = () => {
        setmodalBasketOpen(false)
        useselectedBasket(null)
    }

    return (
        <div className="menu"> 
                <div className='wrapp-menu'>
                    <div className='wrapp-menu__content'>
                        <div className='wrapp-menu__logo'>
                            <a href='#selection1'>
                                <img className='logo' src={logo} alt='Logo' />
                            </a>
                        </div>
                        <div className='wrapp-menu__link'>
                            <a className='menu__link' href='selection1'>
                                <p className='menu__link-text'>Pricing</p>
                            </a>
                            <a className='menu__link' href='selection1'>
                                <p className='menu__link-text'>Solu</p>
                            </a>
                            <a className='menu__link' href='selection1'>
                                <p className='menu__link-text'>Community</p>
                            </a>
                            <a className='menu__link' href='selection1'>
                                <p className='menu__link-text'>Community</p>
                            </a>
                            <a className='menu__link' href='selection1'>
                                <p className='menu__link-text'>Contact</p>
                            </a>
                            
                        </div>
                    </div>
                    <div className='wrapp-menu__button' onClick={handleOpenBasket}>
                        <button className='menu__button' >
                            <ShoppingBasketIcon/>
                            <div>Кошик</div> 
                        </button>
                        <OpenModalBasket openBasket={modalBasketOpen} handleBasketClose={handleCloseBasket} productBasket={selectedBasket}/>
                    </div>
                </div>
        </div>
    )
}

export default Nav;