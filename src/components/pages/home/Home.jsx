import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Facebook from '../../../assets/logo_program/facebook.png';
import Instagram from '../../../assets/logo_program/instagram.png';
import Youtube from '../../../assets/logo_program/youtube.png';
import X from '../../../assets/logo_program/twitter.png';
import Phone from '../../../assets/icons/smartphone-call.png';
import Email from '../../../assets/icons/mail.png';
import Code from '../../../assets/mockup/code.png';
import Menu from '../../../assets/icons/right.png';
import Home_icon from '../../../assets/icons/home.png';
import Add__icon from '../../../assets/icons/add-folder.png';
import About__icon from '../../../assets/icons/student.png';
import Message__icon from '../../../assets/icons/message.png';
import Close__icon from '../../../assets/icons/close.png';
import Up__icon from '../../../assets/icons/up-arrow.png';
import HA from '../../../assets/HA.png';
import Profile from '../profile/Profile';

const Home = () => {
  useEffect(() => {
    document.title = "Portfolio Me -- Home";
  }, []);
  const [isSmallMenuVisible, setSmallMenuVisible] = useState(false); // Initialize state
  const [isMenuFixed, setIsMenuFixed] = useState(false);

  const toggleMenu = () => {
    setSmallMenuVisible(!isSmallMenuVisible);
  };

  const closeMenu = () => {
    setSmallMenuVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) { // Check if scrolled more than 100px
        setIsMenuFixed(true);
      } else {
        setIsMenuFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const currentYear = new Date().getFullYear();
  return (
    <div className="container">
      <div className="flex-items">
        
        <Profile />

        <div className={`menu ${isMenuFixed ? 'fixed' : ''}`}>
          <ul className="menu__list">
            <div className="item__list">
              <a href="#"><Link to="/"><img src={HA} alt="" className="logo" /></Link></a>
              <li className="menu__item"><Link style={{ color: 'var(--title-color)' }} to="/">Home</Link></li>
              <li className="menu__item"><Link style={{ color: 'var(--title-color)' }} to="/contact">Hire Me!</Link></li>
            </div>
            <div className="btn__toggle filter" onClick={toggleMenu}>
              <img src={Menu} alt="" />
            </div>
          </ul>
          <div className="btn__menu" onClick={toggleMenu}>
            <img src={Menu} alt="" />
          </div>
        </div>

        <div className="main-content">
          <div className="main">
            <div className="bg__copy">
              <div className="box1"></div>
              <div className="box2"></div>
            </div>
           <div className="hello__first">
             <img src={Home_icon} alt="" className="icon__home" />
             <p className="hello">Hi! There I'm</p>
           </div>
           <h1 className="title">I'm a <span>Design</span> And <span>Develop</span> Project Minimal Modern.</h1>
            <div className="contacts">
              <div className="contact__icon">
                <img src={Email} alt="" className="contact" />
                <p className="contact__title">ankeara017@gmail.com</p>
              </div>
              <div className="contact__icon">
                <img src={Phone} alt="" className="contact" />
                <p className="contact__title">090 425 397</p>
              </div>
            </div>
            <div className="code__img">
              <img src={Code} alt="" className="code" />
            </div>
            <div className="completed">
              <span>10+</span>
              <p>Projects Completed</p>
            </div>
            
            <div className="bg__demo"></div>
            <div className="blur2"></div>
          </div>
          <div className="sidebar">
            <div className="sidebar__item">
              <li className="sidebar__menu__item"><Link style={{ color: 'var(--title-color)' }} to="/"><img src={Home_icon} alt="" /></Link></li>
              <li className="sidebar__menu__item"><Link style={{ color: 'var(--title-color)' }} to="/about"><img src={About__icon} alt="" /></Link></li>
              <li className="sidebar__menu__item"><Link style={{ color: 'var(--title-color)' }} to="/portfolio"><img src={Add__icon} alt="" /></Link></li>
              <li className="sidebar__menu__item"><Link style={{ color: 'var(--title-color)' }} to="/contact"><img src={Message__icon} alt="" /></Link></li>
            </div>
            <div className="sidebar__link">
              <a href="https://www.facebook.com/ankea.raa.zifusukada?mibextid=LQQJ4d" className="link">FB</a>
              <a href="https://www.youtube.com/@HoutankearA" className="link">YT</a>
              <a href="#" className="link">IG</a>
              <a href="#" className="link">X</a>
              <a href="https://project-designe.vercel.app/" className="link">WB</a>
            </div>
          </div>
        </div>

        <div className={`small__menu ${isSmallMenuVisible ? 'open' : ''}`}>
          <div className="header">
            <a href="#"><img src={HA} alt="" className="logo" /></a>
            <div className="close" onClick={closeMenu}>
              <img src={Close__icon} alt="" />
            </div>
          </div>
          <ul className="small__list">
            <li className="small__menu__item"><img src={Home_icon} alt="" /><Link style={{ color: 'var(--title-color)' }} to="/">Home</Link></li>
            <li className="small__menu__item"><img src={About__icon} alt="" /><Link style={{ color: 'var(--title-color)' }} to="/About">About</Link></li>
            <li className="small__menu__item"><img src={Add__icon} alt="" /><Link style={{ color: 'var(--title-color)' }} to="/Portfolio">Portfolio</Link></li>
            <li className="small__menu__item"><img src={Message__icon} alt="" /><Link style={{ color: 'var(--title-color)' }} to="/Contact">Contact</Link></li>
          </ul>
          <hr />
          <div className="social__links">
            <a href="#" className='blank__link'><img src={Facebook} alt="" className="link" /></a>
            <a href="#" className='blank__link'><img src={Instagram} alt="" className="link" /></a>
            <a href="#" className='blank__link'><img src={Youtube} alt="" className="link" /></a>
            <a href="#" className='blank__link'><img src={X} alt="" className="link" /></a>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Copyright: © {currentYear} <span>H.A.</span> All Rights Reserve</p>
        <a href="#"> <img src={Up__icon} alt="" /></a>
      </div>
    </div>
  );
}

export default Home;
