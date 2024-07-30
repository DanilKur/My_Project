import './Nav.css'
import logo from './../../image/Logo1.png'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Nav = () => {

    const card = () => {
        console.log('card')
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
                            <a className='menu__link' href='#'>
                                <p className='menu__link-text'>Pricing</p>
                            </a>
                            <a className='menu__link' href='#'>
                                <p className='menu__link-text'>Solu</p>
                            </a>
                            <a className='menu__link' href='#'>
                                <p className='menu__link-text'>Community</p>
                            </a>
                            <a className='menu__link' href='#'>
                                <p className='menu__link-text'>Community</p>
                            </a>
                            <a className='menu__link' href='#'>
                                <p className='menu__link-text'>Contact</p>
                            </a>
                            
                        </div>
                    </div>
                    <div className='wrapp-menu__button'>
                        <button className='menu__button'>
                            <ShoppingBasketIcon/>
                            <div onClick={card}>Кошик</div> 
                        </button>
                    </div>
                </div>
        </div>
    )
}

export default Nav;