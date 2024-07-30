import './footer.css'
import logo from './../../image/Logo1.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer-wrapp'>
                    <div className='footer-wrapp__icon'>
                        <div className='wrapp-menu__logo'>
                            <a href='#selection1'>
                                <img className='logo' src={logo} alt='Logo' />
                            </a>
                        </div> 
                        <div>
                            <a className='footer-icon' href='#section1'><InstagramIcon/></a>
                            <a className='footer-icon' href='#section1'><LinkedInIcon/></a>
                            <a className='footer-icon' href='#section1'><FacebookIcon/></a>                           
                        </div>    
                    </div>
                    <div className='footer-wrapp__block'>
                        <div className='footer-wrapp__block-title'>
                            <div className='footer-wrapp__block-title-text'> 
                                <a className='footer-wrapp__block-title-text-link' href='#section1'> Use cases</a> 
                            </div>
                        </div>
                        <div className='footer-wrapp__block-info'>
                            <div className='footer-wrapp__block-text'>
                                <a className='footer-wrapp__block-text' href='#section1'>UI design</a>
                            </div>
                            <div className='footer-wrapp__block-text'>
                                <a className='footer-wrapp__block-text' href='#section1'>UX design</a>
                            </div>
                            <div className='footer-wrapp__block-text'>
                                <a className='footer-wrapp__block-text' href='#section1'>Wireframing</a>
                            </div>
                            <div className='footer-wrapp__block-text'>
                                <a className='footer-wrapp__block-text' href='#section1'>Diagramming</a>
                            </div>
                            <div className='footer-wrapp__block-text'>
                                <a className='footer-wrapp__block-text' href='#section1'>Brainstorming</a>
                            </div>
                            <div className='footer-wrapp__block-text'>
                                <a className='footer-wrapp__block-text' href='#section1'>Online whiteboard</a>
                            </div>
                        </div>
                    </div>
                    <div className='footer-wrapp__block'>
                        <div className='footer-wrapp__block-title'>
                            <div className='footer-wrapp__block-title-text'> 
                                <a className='footer-wrapp__block-title-text-link' href='#section1'> Explore</a> 
                            </div>
                        </div>
                        <div className='footer-wrapp__block-info'>
                            <div className='footer-wrapp__block-text'>
                                <a className='footer-wrapp__block-text' href='#section1'>Design</a>
                            </div>
                            <div className='footer-wrapp__block-text'>
                                <a className='footer-wrapp__block-text' href='#section1'>Prototyping</a>
                            </div>
                            <div className='footer-wrapp__block-text'>
                                <a className='footer-wrapp__block-text' href='#section1'>Development features</a>
                            </div>
                            <div className='footer-wrapp__block-text'>
                                <a className='footer-wrapp__block-text' href='#section1'>Design systems</a>
                            </div>
                            <div className='footer-wrapp__block-text'>
                                <a className='footer-wrapp__block-text' href='#section1'>Collaboration features</a>
                            </div>
                            <div className='footer-wrapp__block-text'>
                                <a className='footer-wrapp__block-text' href='#section1'>Design process</a>
                            </div>
                        </div>
                    </div>
                    <div className='footer-wrapp__block'>
                        <div className='footer-wrapp__block-title'>
                            <div className='footer-wrapp__block-title-text'> 
                                <a className='footer-wrapp__block-title-text-link' href='#section1'> Resources</a> 
                            </div>
                        </div>
                        <div className='footer-wrapp__block-info'>
                            <div className='footer-wrapp__block-text'>
                                <a className='footer-wrapp__block-text' href='#section1'>Blog</a>
                            </div>
                            <div className='footer-wrapp__block-text'>
                                <a className='footer-wrapp__block-text' href='#section1'>Best practices</a>
                            </div>
                            <div className='footer-wrapp__block-text'>
                                <a className='footer-wrapp__block-text' href='#section1'>Colors</a>
                            </div>
                            <div className='footer-wrapp__block-text'>
                                <a className='footer-wrapp__block-text' href='#section1'>Color wheel</a>
                            </div>
                            <div className='footer-wrapp__block-text'>
                                <a className='footer-wrapp__block-text' href='#section1'>Support</a>
                            </div>
                            <div className='footer-wrapp__block-text'>
                                <a className='footer-wrapp__block-text' href='#section1'>Developers</a>
                            </div>
                        </div>
                    </div>     
                </div>
            </div>
            
        </div>
    )
}
export default Footer;