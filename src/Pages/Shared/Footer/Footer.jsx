import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { FaFacebook, FaGithub, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className="p-10 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white rounded-t-3xl shadow-2xl mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="flex flex-col items-start">
          <img className='w-20 h-20 rounded-xl shadow-lg border-2 border-white mb-2' src={logo} alt="Logo" />
          <p className="font-bold text-lg mb-1">Shutter Camp</p>
          <p className="text-sm text-blue-100">123 Photography Lane<br/>City, State 2012</p>
        </div>
        <div>
          <span className="footer-title text-blue-200 font-semibold mb-2 block">Services</span>
          <ul className="space-y-1">
            <li><Link className="hover:underline hover:text-blue-200 transition-colors duration-200">Photography Classes</Link></li>
            <li><Link className="hover:underline hover:text-blue-200 transition-colors duration-200">Outdoor Workshops</Link></li>
            <li><Link className="hover:underline hover:text-blue-200 transition-colors duration-200">Photo Editing Training</Link></li>
            <li><Link className="hover:underline hover:text-blue-200 transition-colors duration-200">Portfolio Reviews</Link></li>
          </ul>
        </div>
        <div>
          <span className="footer-title text-blue-200 font-semibold mb-2 block">Company</span>
          <ul className="space-y-1">
            <li><Link className="hover:underline hover:text-blue-200 transition-colors duration-200">About us</Link></li>
            <li><Link className="hover:underline hover:text-blue-200 transition-colors duration-200">Our Team</Link></li>
            <li><Link className="hover:underline hover:text-blue-200 transition-colors duration-200">Contact</Link></li>
            <li><Link className="hover:underline hover:text-blue-200 transition-colors duration-200">Testimonials</Link></li>
          </ul>
        </div>
        <div>
          <span className="footer-title text-blue-200 font-semibold mb-2 block">Social</span>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-blue-300 transition-colors duration-200"><FaTwitter className='text-2xl' /></a>
            <a href="#" className="hover:text-blue-300 transition-colors duration-200"><FaYoutube className='text-2xl' /></a>
            <a href="#" className="hover:text-blue-300 transition-colors duration-200"><FaFacebook className='text-2xl' /></a>
          </div>
        </div>
      </div>
    </footer>
    <div className='bg-blue-900 text-center py-4 rounded-b-3xl shadow-xl'>
      <p className='text-blue-100 text-sm'>Copyright &copy; 2023 - All rights reserved by <span className='text-blue-200 font-bold'>Moriam Akter Swarna</span></p>
    </div>
    </>
  );
};

export default Footer;
