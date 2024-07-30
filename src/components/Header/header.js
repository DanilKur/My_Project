import './header.css'
import Stiker from './../../image/sticker2.png'
import React, { useContext } from 'react';
import { ScrollContext } from '../Helper/ScrollContext';

const Header = () => {
    const { scrollToCards } = useContext(ScrollContext);


    return (
        <header className="header">
            <div className="container">
                <div className='header-wrapp'>
                    <div className='header-title'>
                        <div className='header-wrapp__title'>
                            <div className='header-wrapp__title-text'>
                                Найкраща кондитерська 
                            </div>
                            <div className='header-wrapp__title-text'>
                                цього міста
                            </div>
                        </div>
                        
                        <div className='header-wrapp__button'>
                            <button className='header-button' onClick={scrollToCards}>
                                Перейти до тістечок
                            </button>
                        </div>
                    </div>
                    <div className='header-wrapp__bagr'>
                        <img className='header-stiker' src={Stiker} alt='Stiker'></img>
                    </div>
                    

                </div>
            </div>
        </header>
    )
}

export default Header;