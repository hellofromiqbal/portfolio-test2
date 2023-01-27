import './footer.css';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__copyright">
        <small>Copyright &copy; 2023 All rights reserved | This template is made with ♥ by Muhammad Iqbal</small>
      </div>
      <ul className="footer__social">
        <li><FiFacebook className='footer-icon'/></li>
        <li><FiInstagram className='footer-icon'/></li>
        <li><FiTwitter className='footer-icon'/></li>
      </ul>
    </footer>
  );
}
 
export default Footer;