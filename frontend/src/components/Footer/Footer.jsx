import './Footer.css'
import { assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className = 'footer' id='footer'>
    <div className='footer-content'>
    <div className = 'footer-content-left'>
     <img src= {assets.logo}/>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe nesciunt ducimus perspiciatis, ipsam reiciendis mollitia accusamus! Modi expedita voluptas sapiente, ducimus omnis fugit sed impedit et quibusdam culpa eveniet commodi.</p>
   
    <div className = "footer-content-icons">
    <img src={assets.facebook_icon} alt ="" />
    <img src={assets.twitter_icon} alt=""/>
    <img src={assets.linkedin_icon} alt=""/>
     </div>
    </div>
    <div className = "footer-content-center">
     <h2>COMPANY</h2>
     <ul>
      <li>Home</li>
      <li>About us</li>
      <li>Delivery</li>
      <li>Privacy policy</li>
     </ul>
    </div>
    <div className="footer-content-right">
      <h2>GET IN Touch</h2>
      <ul>
        <li>+1-212-456-7890</li>
        <li>contact@tomato.com</li>
      </ul>
    </div>
    </div>
    <hr/>
  <p className="footer-copyright">
  © {new Date().getFullYear()} tomato.com – All Rights Reserved.
</p>
    </div>
  )
}

export default Footer
