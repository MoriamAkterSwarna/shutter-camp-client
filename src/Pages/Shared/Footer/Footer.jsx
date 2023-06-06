import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { FaFacebook, FaGithub, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className="footer p-10 bg-black text-neutral-content">
      <div>
        <img className='w-20 h-20 rounded-md' src={logo} alt="" />
        <p>
          Shutter Camp 
          <br />
          123 Photography Lane, City, State 2012
        </p>
      </div>
      <div>
    <span className="footer-title">Services</span> 
    <Link className="link link-hover">Photography Classes</Link> 
    <Link className="link link-hover">Outdoor Workshops</Link> 
    <Link className="link link-hover">Photo Editing Training</Link> 
    <Link className="link link-hover">Portfolio Reviews</Link>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <Link className="link link-hover">About us</Link> 
    <Link className="link link-hover">Our Team</Link> 
    <Link className="link link-hover">Contact</Link> 
    <Link className="link link-hover">Testimonials</Link>
  </div> 
  <div></div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4">
          <a>
            <FaTwitter className='text-xl'></FaTwitter>
          </a>
          <a>
            <FaYoutube className='text-xl'></FaYoutube>
          </a>
          <a>
            <FaFacebook className='text-xl'></FaFacebook>
          </a>
        </div>
      </div>
      
    </footer>
    <div className='bg-black text-center pb-10'>
    <p className='text-white'>Copyright &copy; 2023 - All right reserved By <span className='text-emerald-700'>Moriam Akter Swarna</span></p>

    </div></>
  );
};

export default Footer;
