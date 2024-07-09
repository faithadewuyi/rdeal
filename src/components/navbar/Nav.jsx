import  { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const navMenu = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    delay: 0.1,
  },
  {
    id: 2,
    title: 'Shop',
    path: '/#products',
    delay: 0.2,
  },
  {
    id: 3,
    title: 'About Us',
    path: '',
    delay: 0.3,
  },
];

const SlideDown = (delay) => {
  return {
    initial: {
      y: '-100%',
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
};

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg  fixed top-0 w-full z-10 ">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* logo */}
        <motion.img
          src="../logo.png"
          alt="logo"
          className="w-12 h-4 mt-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        {/* menu toggle button for mobile */}
        <button
          className="text-black block  text-6xl md:hidden"
          onClick={toggleMenu}
        >
          <span className="material-symbols-outlined">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* menu items */}
        <div className={`w-full md:flex md:items-center md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row md:gap-6">
            {navMenu.map((menu) => (
              <motion.li
                key={menu.id}
                variants={SlideDown(menu.delay)}
                initial="initial"
                animate="animate"
                className="nav-menu"
                data-delay={menu.delay}
              >
                <a href={menu.path} className="inline-block px-2 py-2 text-2xl font-roboto text-black">
                  {menu.title}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* icons and signup button */}
        <motion.div
          variants={SlideDown(1)}
          initial="initial"
          animate="animate"
          className="flex items-center space-x-2"
        >
          <Link to="/cart" className="hover:text-btn text-black">
            <span className="material-symbols-outlined">shopping_cart</span>
          </Link>
          <a href="/wishlist" className="hover:text-btn text-black">
            <span className="material-symbols-outlined">favorite</span>
          </a>
          <a href="/profile" className="hover:text-btn text-black">
            <span className="material-symbols-outlined">person</span>
          </a>
          <a
            href="/signin"
            className="py-1 text-white font-medium bg-btn px-4 rounded-md text-center w-40 sm:w-50 sm:px-1 hover:font-bold text-lg"
          >
            Login/Signup
          </a>
        </motion.div>
      </div>
      
    </nav>
  );
};

export default Nav;
