import Man from '../../../assets/mockup/mens.jpg';
import Facebook from '../../../assets/logo_program/facebook.png';
import Instagram from '../../../assets/logo_program/instagram.png';
import Youtube from '../../../assets/logo_program/youtube.png';
import X from '../../../assets/logo_program/twitter.png';
import CV from '../../../assets/CV.pdf';
import './profile.css';


const Profile = () => {
  return (
    <>
      <div className="profile">
          <div className="blur"></div>
          <div className="img__box">
            <img src={Man} alt="" className="profile__img" />
            <a href='#' className="box__link">
              <img src={Facebook} alt="" className="link" />
            </a>
          </div>
          <h2 className="home__name">Hout Ankeara</h2>
          <span className="home__skill">I'm a Frontend and Laravel Developer</span>
          <div className="btn__link">
            <a href="#" className="btn hire__me">Hire Me!</a>
            <a href={CV} className="btn dn__cv">Download CV</a>
          </div>        

          <p className="dec">Specializing in strategy, improving design maturity & design systems.</p>  
          <div className="links">
            <a href="#" className='blank__link'><img src={Facebook} alt="" className="link" /></a>
            <a href="#" className='blank__link'><img src={Instagram} alt="" className="link" /></a>
            <a href="#" className='blank__link'><img src={Youtube} alt="" className="link" /></a>
            <a href="#" className='blank__link'><img src={X} alt="" className="link" /></a>
          </div>
        </div>
    </>
  )
}

export default Profile
