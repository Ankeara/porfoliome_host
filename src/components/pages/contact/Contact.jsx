import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './contact.css';
import Facebook from '../../../assets/logo_program/facebook.png';
import Instagram from '../../../assets/logo_program/instagram.png';
import Youtube from '../../../assets/logo_program/youtube.png';
import X from '../../../assets/logo_program/twitter.png';
import Close__icon from '../../../assets/icons/close.png';
import Up__icon from '../../../assets/icons/up-arrow.png';
import HA from '../../../assets/HA.png';
import Profile from '../profile/Profile';
import Menu from '../../../assets/icons/right.png';
import Home_icon from '../../../assets/icons/home.png';
import Add__icon from '../../../assets/icons/add-folder.png';
import About__icon from '../../../assets/icons/student.png';
import Message__icon from '../../../assets/icons/message.png';
import Contact__icon from '../../../assets/icons/message-alert.png';
import Phone__icon from '../../../assets/icons/phone-call.png';
import Location__icon from '../../../assets/icons/location-pin.png';
import Swal from 'sweetalert2'
const Contact = () => {
useEffect(() => {
    document.title = "Portfolio Me -- Contact";
  }, []);
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7ea3145f-5ed3-4f08-ba33-ee6a98f91a78");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully!",
        icon: "success"
      });
    }
  };

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

  return <div className="container">
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
              <div className="box"></div>
              <div className="box"></div>
            </div>
           <div className="hello__first">
             <img src={Message__icon} alt="" className="icon__home" />
             <p className="hello">Contact our office</p>
           </div>
           <h1 className="title">Jeckob Martin the best Contact <span>Us</span></h1>
           <div className="section__contact">
              <h3 className="contact__title">Contacts</h3>
              <div className="flex__contact">
                <div className="contact__list">
                  <div className="contact__detail">
                    <img src={Phone__icon} alt="" />
                    <h4 className="contact">Contact Phone</h4>
                  </div>
                  <h3 className="detail">855+ 07 425 397</h3>
                </div>
                <div className="contact__list">
                  <div className="contact__detail">
                    <img src={Contact__icon} alt="" />
                    <h4 className="contact">Contact Email</h4>
                  </div>
                  <h3 className="detail">info.ankeara017@gamil.com</h3>
                  <h3 className="detail">info.houtankeara17@gamil.com</h3>
                </div>
              </div>
              <div className="flex__contact">
                <div className="contact__list">
                  <div className="contact__detail">
                    <img src={Location__icon} alt="" />
                    <h4 className="contact">Contact Location</h4>
                  </div>
                  <h3 className="detail">Krong Poi pet</h3>
                  <h3 className="detail">Banteay Meanchey Province</h3>
                </div>
              </div>
            </div>
            <div className="section__form">
              <h3 className="form__title">Contact Us</h3>
              <div className="contact__container">

                <form className="contact__form" onSubmit={onSubmit}>
                  <div className="contact__form-group">
                    <div className="contact__form-div">
                      <input type="text" className="contact__form-input" name='name' required placeholder='Insert your name'/>
                    </div>

                    <div className="contact__form-div">
                      <input type="text" className="contact__form-input" name='email' required placeholder='Insert your email'/>
                    </div>

                  </div>
                    <div className="contact__form-div">
                      <input type="text" className="contact__form-input" name='subject' required placeholder='Insert your subject'/>
                    </div>

        <div className="contact__form-div contact__form-area">
                      <textarea id="" cols="30" rows="10" name="message" className='contact__form-input' required placeholder='Write your message'></textarea>
                    </div>    

                    <button className='btn' type='submit'>Send Messgae</button>
                </form>
              </div>
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
            <li className="small__menu__item"><img src={About__icon} alt="" /><Link style={{ color: 'var(--title-color)' }} to="/">About</Link></li>
            <li className="small__menu__item"><img src={Add__icon} alt="" /><Link style={{ color: 'var(--title-color)' }} to="/">Portfolio</Link></li>
            <li className="small__menu__item"><img src={Message__icon} alt="" /><Link style={{ color: 'var(--title-color)' }} to="/">Contact</Link></li>
          </ul>
          <hr />
           <div className="sidebar__link">
              <a href="https://www.facebook.com/ankea.raa.zifusukada?mibextid=LQQJ4d" className="link">FB</a>
              <a href="https://www.youtube.com/@HoutankearA" className="link">YT</a>
              <a href="#" className="link">IG</a>
              <a href="#" className="link">X</a>
            </div>
        </div>
      </div>
      <div className="footer">
        <p>Copyright: © {currentYear} <span>H.A.</span> All Rights Reserve</p>
        <a href="#"> <img src={Up__icon} alt="" /></a>
      </div>
    </div>;
};

export default Contact;
