import { useState, useRef, useEffect } from 'react';
import Products from './Products';
import Hero from '../../components/hero/Hero';
import Footer from '../../components/footer/Footer';

function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const productsRef = useRef(null);
  const heroRef = useRef(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

 

  useEffect(() => {
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedCategory]);

  return (
    <div>
      <Hero ref={heroRef} />
      <nav className="hidden lg:flex flex-row gap-5 my-4 w-5/6 bg-white shadow-lg font-roboto ml-60 items-center">
        <button onClick={() => handleCategoryClick('phones')} className="underline font-bold text-sm mr-4">Samsung Phones</button>
        <button onClick={() => handleCategoryClick('tablets')} className="hover:underline text-gray text-sm mr-4">Samsung Tablets</button>
        <button onClick={() => handleCategoryClick('phones')} className="hover:underline text-gray text-sm mr-8">Accessories</button>

        <div className="relative lg:block">
          <input
            type="text"
            placeholder="Search Products"
            className="pl-10 pr-3 py-1 text-gray rounded-lg border border-gray focus:outline-none focus:border-btn"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span className="material-symbols-outlined text-black">search</span>
          </div>
        </div>

        <img src="Frame.svg" className="ml-auto" />
      </nav>
      <header className="flex flex-col lg:flex-row gap-2 mt-2 w-5/6 lg:ml-60 bg-white shadow-lg border-2 border-white font-roboto items-center">
      
        <button onClick={() => handleCategoryClick('all')} className="underline font-medium text-sm border border-btnlight bg-btnlight py-1 px-2">ALL</button>
        <button onClick={() => handleCategoryClick('tablets')} className="hover:underline text-gray text-sm border-gray border py-1 px-6 rounded-md ml-auto">Galaxy S Series</button>
        <button onClick={() => handleCategoryClick('phones')} className="hover:underline text-gray text-sm border-gray border py-1 px-6 rounded-md ml-auto">Galaxy Z Series</button>
        <button onClick={() => handleCategoryClick('tablets')} className="hover:underline text-gray text-sm border-gray border py-1 px-6 rounded-md ml-auto">Galaxy A Series</button>
        <button onClick={() => handleCategoryClick('phones')} className="hover:underline text-gray text-sm border-gray border py-1 px-6 rounded-md ml-auto">Galaxy M Series</button>
        <button onClick={() => handleCategoryClick('tablets')} className="hover:underline text-gray text-sm ml-auto border-gray border py-1 px-6 rounded-md">Galaxy F Series</button>
      </header>

      <div ref={productsRef} className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mx-auto mb-4 max-w-2xl px-2 py-7 sm:px-4 sm:py-10 lg:max-w-7xl lg:px-8">
          <Products category={selectedCategory} />
          <div className="flex items-center justify-center my-4 space-x-2">
            <button className="px-2 py-1 rounded-full border bg-btnlight hover:bg-btn hover:text-white">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300">1</button>
            <button className="px-2 py-1 rounded-full border bg-btnlight hover:bg-btn hover:text-white">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
       <Footer /> 
    </div>
  );
}

export default ProductPage;
