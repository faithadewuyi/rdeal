


import {BsTwitterX } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';
import { FaPinterestSquare } from 'react-icons/fa';


const Footer = () => {
  return (
    <>
    <footer className="bg-footer text-white py-8">
      
      {/* Second Row: Links and Logo */}
      <div className="bg-footer pt-4 pb-10">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 */}
          {/* Logo and Tagline */}
          <div>
            <img src="logo.png" alt="footer logo"  className='w-30 h-30' />
            {/* <p className="text-gray-400">Your catchy tagline goes here.</p> */}
          </div>
          {/* Links */}
          <div className='pt-20'>
            <p className="font-bold mb-8 font-mon text-base text-black w-32 h-2 ">Explore our extensive collection of Samsung cutting-edge smartphones, designed to elevate your tech experience.</p>
            <div className="flex space-x-4 md:order-2 w-full ">
            <span className='font-bold mb-4'>FOLLOW US ON :</span>
            <a href="#" className="text-gray-400 hover:text-btn ">
            <FaInstagram  className="w-6 h-6"  />
            </a>
            <a href="#" className="text-gray-400 hover:text-btn">
            <FaPinterestSquare className="w-6 h-6"  /> 
            </a>
            <a href="#" className="text-gray-400 hover:text-btn">
            <SiLinkedin className="w-6 h-6"  />
            </a>
            <a href="#" className="text-gray-400 hover:text-btn">
           <FaFacebookSquare className="w-6 h-6"  />
            </a>
            <a href="#" className="text-gray-400 hover:text-btn">
            <BsTwitterX className="w-6 h-6"  />
            </a>
          </div>
            {/* <ul>
              <li className="mb-2"><a href="#" className="text-footerTextLink hover:underline  hover:text-btn ">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-footerTextLink hover:underline  hover:text-btn ">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="text-footerTextLink hover:underline  hover:text-btn ">Return Policy</a></li>
              <li className="mb-2"><a href="#" className="text-footerTextLink hover:underline  hover:text-btn ">Terms & Condition</a></li>
            </ul> */}
          </div>
          <div className='pt-20'>
            <h4 className="font-bold mb-4">NEED HELP?</h4>
            <ul >
              <li className="mb-2"><a href="#" className="text-footerTextLink hover:underline  hover:text-btn ">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="text-footerTextLink hover:underline  hover:text-btn">FAQs</a></li>
              <li className="mb-2"><a href="#" className="text-footerTextLink hover:underline  hover:text-btn ">Help Center</a></li>
              <li className="mb-2"><a href="#" className="text-footerTextLink hover:underline  hover:text-btn ">Customer Support</a></li>
              <li className="mb-2"><a href="#" className="text-footerTextLink hover:underline  hover:text-btn ">Shipping Info</a></li>

            </ul>
          </div>
          <div className='pt-20'>
            <h4 className="font-bold mb-4">MAKE MONEY WITH LUXE TROVE</h4>
            <ul>
              <li className="mb-2">
                <a href="" className="text-footerTextLink hover:underline  hover:text-btn ">Sell With Us
                </a>
                </li>
              <li className="mb-2">
              <a href="" className="text-footerTextLink hover:underline  hover:text-btn ">Sell With Us
                </a>
                </li>
              <li className="mb-2">
              <a href="" className="text-footerTextLink hover:underline  hover:text-btn ">Sell With Us
              </a>
              </li>
              <li className="mb-2">
              <a href="" className="text-footerTextLink hover:underline  hover:text-btn ">Sell With Us
              </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Third Row: Copyright and Social Media */}
      {/* <hr/> */}
      {/* className="container mx-auto px-4 sm:px-6 lg:px-8 border-b-2 border-amber-400"> */}
      <div className="bg-footer pt-8 border-t border-amber-500">
        <div className="container mx-auto px-4 sm:px-6  w-100%  lg:px-8 md:flex  justify-between items-center">
          {/* <p className="text-gray-400  sm:order-2 w-full pb-3 "  >© 2024 <span className=" hover:underline text-btn font-bold mx-2"> LUXE TROVE.</span> All rights reserved.</p> */}
          
          <p className="text-gray-400  md:order-1 w-full pb-3 "  >© 2024 <span className=" hover:underline text-btn font-bold mx-2"> LUXE TROVE.</span> All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
