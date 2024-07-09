import React from 'react';
import { motion } from 'framer-motion';
import Nav from '../navbar/Nav';


const Hero = () => {
  const [isLargeScreen, setIsLargeScreen] = React.useState(false);

  React.useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Change 1024 to the breakpoint you desire
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);
  return (
    <div id="hero">
     
      <Nav/>
    <main className="w-full  bg-cover bg-top-center bg-hero mt-12">
      <div className="container min-h-[600px] flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:gap-24 place-items-center justify-between">
          {/* Text Content */}
          <div className="space-y-3 mt-1 text-left md:mt-0 order-2 md:order-1 lg:transform lg:-translate-x-72">
            <h2 className="text-4xl md:text-6xl font-bold text-white text-mon lg:text-7xl">
              Discover the latest in
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-mon">
              Samsung Innovation
            </h2>
            <p className="-2 mb-4 text-base text-white md:text-lg text-mon">
              Get up to 70% Discount
            </p>
            <button className="block md:inline-block bg-btn rounded-md px-6 py-1 text-white font-medium hover:font-bold hover:bg-btnHover w-full md:w-auto">
              Explore
            </button>
          </div>
          {/* Images */}
          <motion.div 
            className="order-1 md:order-2 lg:transform lg:translate-x-80"
            initial={{ opacity: 0, x: isLargeScreen ? 50 : 10 }}
            animate={{ opacity: 1, x: isLargeScreen ? 400 : 10 }}
            transition={{ duration: 1 }}
          >
            <img src="hero.png" alt="hero image" className="w-52 h-52 object-cover  md:mb-0" />
          </motion.div>
        </div>
      </div>
    </main>
    </div>
  );
};

export default Hero;
