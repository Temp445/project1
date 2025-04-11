import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/Images/AceLogo.png';
import facebook from "../../assets/Images/facebook.png";
import youtube from "../../assets/Images/youtube.png";
import linkedin from "../../assets/Images/linkedin.png";
import instagram from "../../assets/Images/instagram.png";

const Footer = () => {
  return (
    <div className="bg-[#FFF5F5] mt-10 xl:mt-40 py-8">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
       
        <div className="flex items-center gap-2 mb-8 md:mb-10 ">
          <img src={logo} alt="logo" className="w-8 md:w-9 xl:w-10" />
          <h2 className="text-sm md:text-base xl:text-lg font-semibold">ACE Software Solutions Pvt. Ltd.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8 px-5">

          <div className="flex flex-col space-y-4">
            <h1 className="text-sm md:text-base xl:text-lg font-semibold">Contact Us</h1>
            <p className="text-xs md:text-sm xl:text-base max-w-xs">
              #306, 2nd Floor NSIC - Software Technology Business Park B 24, Guindy
              Industrial Estate Ekkaduthangal, Chennai - 600032
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4 mt-4">
              <a href="https://www.facebook.com/people/Ace-Software-Solutions-Pvt-Ltd/61565550617223/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 md:w-7 md:h-7">
                <img src={facebook} alt="facebook" className="w-full h-full object-contain" />
              </a>
              <a href="https://youtube.com/@acesoftwaresolutions?si=KqZ0BFZg5pNmGBqk" target="_blank" rel="noopener noreferrer" className="w-6 h-6 md:w-7 md:h-7">
                <img src={youtube} alt="youtube" className="w-full h-full object-contain" />
              </a>
              <a href="https://in.linkedin.com/company/ace-software-solutions-private-limited" target="_blank" rel="noopener noreferrer" className="w-6 h-6 md:w-7 md:h-7">
                <img src={linkedin} alt="linkedin" className="w-full h-full object-contain" />
              </a>
              <a href="https://www.instagram.com/ace_software_solutions/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 md:w-7 md:h-7">
                <img src={instagram} alt="instagram" className="w-full h-full object-contain" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
     
            <div className="flex flex-col space-y-4">
              <h1 className="text-sm md:text-base xl:text-lg font-semibold">Company</h1>
              <div className="flex flex-col space-y-2 md:space-y-3">
                <Link to="#" className="text-xs md:text-sm xl:text-base hover:text-gray-600 transition-colors">Customer Support</Link>
                <Link to="#" className="text-xs md:text-sm xl:text-base hover:text-gray-600 transition-colors">Blogs</Link>
                <Link to="#" className="text-xs md:text-sm xl:text-base hover:text-gray-600 transition-colors">Terms & Conditions</Link>
                <Link to="#" className="text-xs md:text-sm xl:text-base hover:text-gray-600 transition-colors">Privacy Policy</Link>
              </div>
            </div>

            
            <div className="flex flex-col space-y-4  ">
              <h1 className="text-sm md:text-base xl:text-lg font-semibold">Help</h1>
              <div className="flex flex-col space-y-2 md:space-y-3">
                <Link to="/about" className="text-xs md:text-sm xl:text-base hover:text-gray-600 transition-colors">About</Link>
                <Link to="/products" className="text-xs md:text-sm xl:text-base hover:text-gray-600 transition-colors">Products</Link>
                <Link to="/ProductEnquire" className="text-xs md:text-sm xl:text-base hover:text-gray-600 transition-colors">Product Enquiry</Link>
                <Link to="/contact" className="text-xs md:text-sm xl:text-base hover:text-gray-600 transition-colors">Book A Demo</Link>
              </div>
            </div>
          </div>

         
          <div className="md:hidden lg:block w-full h-48 xl:h-56 rounded-md overflow-hidden border border-gray-300">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7774.626039048191!2d80.20146899191994!3d13.0157278024425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52669470c1b127%3A0xe3512b101f4ee3ad!2sACE%20Software%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1742627952587!5m2!1sen!2sin" 
              title="ACE Software Solutions location"
              className="w-full h-full"
              frameBorder="0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

   
        <hr className="border-gray-300 my-6" />
        <p className="text-xs md:text-sm text-center text-gray-600">
          © Copyright 2025, All Rights Reserved by ACE Software Solutions Private Limited.
        </p>
      </div>
    </div>
  );
};

export default Footer;