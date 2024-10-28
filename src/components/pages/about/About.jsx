import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './about.css';
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
import Tools from './Tools';
import Card from './Card';

const About = () => {
  useEffect(() => {
    document.title = "Portfolio Me -- About";
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
              <div className="box1"></div>
              <div className="box2"></div>
            </div>
           <div className="hello__first">
             <img src={About__icon} alt="" className="icon__home" />
             <p className="hello">About Me!</p>
           </div>
           <h1 className="title">Hire the best Portfolio Freelancers in <span>Banteay Meanchey</span></h1>
            <div className="my__details">
              <h3 className="detail__title">My Details</h3>
              <div className="flex__details">
                <div className="detail__list">
                <h4 className="detail">My Name :</h4>
                <ul className="decsription">
                  <li>HOUT ANKEARA</li>
                </ul>
              </div>
              <div className="detail__list">
                <h4 className="detail">My Phone No. :</h4>
                <ul className="decsription">
                  <li>+855 90 425 397</li>
                </ul>
              </div>
              </div>
              <div className="flex__details">
                <div className="detail__list">
                <h4 className="detail">My Email:</h4>
                <ul className="decsription">
                  <li>ankeara017@gmail.com</li>
                </ul>
              </div>
              <div className="detail__list">
                <h4 className="detail">My Address :</h4>
                <ul className="decsription">
                  <li>Banteay Meanchey Province</li>
                </ul>
              </div>
              </div>
              <div className="flex__details">
                <div className="detail__list">
                <h4 className="detail">Language :</h4>
                <ul className="decsription">
                  <li>Khmer</li>
                  <li>English</li>
                </ul>
              </div>
              <div className="detail__list">
                <h4 className="detail">My Nationality :</h4>
                <ul className="decsription">
                  <li>Cambodian</li>
                </ul>
              </div>
              </div>
            </div>
            <div className="skills">
              <h3 className="skill__title">My Skills</h3>
              <div className="flex__skills">
                <div className="skill__level">
                  <ul className="skill">
                      <li>Developing</li>
                  </ul>
                  <div className="prograss">
                    <span className="line1"></span>
                    <span className="level">60%</span>
                  </div>
                </div>
                <div className="skill__level">
                  <ul className="skill">
                    <li>Design</li>
                  </ul>
                  <div className="prograss">
                    <span className="line2"></span>
                    <span className="level">50%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="education">
              <h3 className="education__title">Educations</h3>
              <div className="education__detail">
                <div className="circles">
                  <div className="circle"></div>
                  <div className="line1"></div>
                  <div className="line2"></div>
                </div>
                <div className="education__list">
                  <h4 className="year">2022 - Present  </h4>
                  <ul className="decsription">
                    <li>Build Bright University</li>
                  </ul>
                </div>
              </div>
              <div className="education__detail">
                <div className="circles">
                  <div className="circle"></div>
                  <div className="line1"></div>
                  <div className="line2"></div>
                </div>
                <div className="education__list">
                  <h4 className="year">2023 On January - February</h4>
                  <ul className="decsription">
                    <li>Short Course Static Website in Master IT School 2Months</li>
                  </ul>
                </div>
              </div>
              <div className="education__detail">
                <div className="circles">
                  <div className="circle"></div>
                  <div className="line1"></div>
                  <div className="line2"></div>
                </div>
                <div className="education__list">
                  <h4 className="year">2023 On May - June</h4>
                  <ul className="decsription">
                    <li>Short Course Dynamic Website In ReanWeb 2Months</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tool__used">
              <h3 className="tool__title">What I Used</h3>
              <div className="box__items">
              {Tools.map((tool) => (
                <Card key={tool.id} image={tool.image} />
              ))}
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
    </div>;
};

export default About;
