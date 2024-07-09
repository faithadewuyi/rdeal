import ProductCards from '../../components/cards/ProductCards';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Products = ({ category }) => {
  
  const products = [
    {
      id: 1,
      imageSrc: '../1.png',
      productName: 'Samsung Galaxy Note 10',
      productDesc: '6.8 Inch (256GB/12GB)',
      productPrice: '₦780,000',
      review: '⭐⭐⭐⭐⭐',
      reviewCount: '(21 reviews)',
      category: 'phones',
    },
    {
      id: 2,
      imageSrc: '../2.png',
      productName: 'Samsung Galaxy S9',
      productDesc: '5.8Inch QHD(4GB +64GB ROM)',
      productPrice: '₦456,000',
      review: '⭐⭐⭐⭐⭐',
      reviewCount: '(21 reviews)',
      category: 'phones',
    },
    {
      id: 3,
      imageSrc:"../3.png",
      productName:"Samsung Galaxy Note 10",
      productDesc:"6.8 Inch (256GB/12GB)",
      productPrice:"₦780,000",
      review:"⭐⭐⭐⭐⭐",
      reviewCount:"(21 reviews)",
      category: "tablets",
    },
    {
      id: 4,
      imageSrc:"../4.png",
      productName:"Samsung Galaxy S9",
      productDesc:"5.8Inch QHD(4GB +64GB ROM)",
      productPrice:"₦456,000",
      review:"⭐⭐⭐⭐⭐",
      reviewCount:"(21 reviews)",
      category: "phones",
    },
    { id: 5,
      imageSrc:"../5.png",
      productName:"Samsung Galaxy A51",
      productDesc:"Dual Sim(4GB +128GB )",
      productPric:"₦90,000",
      review:"⭐⭐⭐⭐⭐",
      reviewCount:"(21 reviews)",
      category: "phones",

    },
    {   id:6,
        imageSrc:"../6.png",
        productName:"Samsung Galaxy A10",
        productDesc:"5G(8GB +256GB ROM)",
        productPrice:"₦250,000",
        review:"⭐⭐⭐⭐⭐",
        reviewCount:"(21 reviews)",
        category: "phones"
    },
    {   
        id: 7,
        imageSrc:"../7.png",
        productName:"Samsung Galaxy Z Flip 4",
        productDesc:"5.8Inch QHD(4GB +64GB ROM)",
        productPrice:"₦780,000",
        review:"⭐⭐⭐⭐⭐",
        reviewCount:"(21 reviews)",
        category: "tablets",
    },
      {
        id:8,
        imageSrc:"../8.png",
        productName:"Samsung Galaxy Z Flip 4",
         productDesc:"5.8Inch QHD(4GB +64GB ROM)",
        productPrice:"₦500,000",
        review:"⭐⭐⭐⭐⭐",
        reviewCount:"(21 reviews)",
        category:"tablets",
      },
      {
        id: 9,
        imageSrc:"../9.png",
        productName:"Samsung Galaxy Z Fold 4",
        productDesc:"5G(8GB +256GB ROM)",
        productPrice:"₦900,000",
        review:"⭐⭐⭐⭐⭐",
        reviewCount:"(21 reviews)",
        category: "tablets",
      },
      {
        id: 10,
        imageSrc:"../10.png",
        productName:"Samsung Galaxy Z Fold 2",
         productDesc:"5.8Inch QHD(4GB +64GB ROM)",
        productPrice:"₦350,000",
        review:"⭐⭐⭐⭐⭐",
        reviewCount:"(21 reviews)",
        category: "tablets",
      },
        {
        id: 11,
        imageSrc:"../11.png",
        productName:"Samsung Galaxy Note 20",
        productDesc:"5G(8GB +256GB ROM)",
        productPrice:"₦500,000",
        review:"⭐⭐⭐⭐⭐",
        reviewCount:"(21 reviews)",
        category: "phones",
        },
        {
        id: 12,
        imageSrc:"../12.png",
        productName:"Samsung Galaxy S23",
        productDesc:"5.8Inch QHD(4GB +64GB ROM)",
        productPrice:"₦660,000",
        review:"⭐⭐⭐⭐⭐",
        reviewCount:"(21 reviews)",
        category: "phones"
    },
      { 
        id: 13,
        imageSrc:"../13.png",
        productName:"Samsung Galaxy S24 Ultra",
         productDesc:"5.8Inch QHD(4GB +64GB ROM)",
        productPrice:"₦1,200,000",
        review:"⭐⭐⭐⭐⭐",
        reviewCount:"(21 reviews)",
        category: "phones"
    },
  
    {
        id:14,
        imageSrc:"../14.png",
        productName:"Samsung Galaxy Z Fold 2",
        productDesc:"5G(8GB +256GB ROM)",
        productPrice:"₦400,000",
        review:"⭐⭐⭐⭐⭐",
        reviewCount:"(21 reviews)",
        category: "tablets"
    },
      {
        id: 15,
        imageSrc:"../15.png",
        productName:"Samsung Galaxy A33",
        productDesc:"5G(8GB +256GB ROM)",
        productPrice:"₦100,000",
        review:"⭐⭐⭐⭐⭐",
        reviewCount:"(21 reviews)",
        category:"phones",
    },
    {
        id: 16,
        imageSrc:"../14.png",
        productName:"Samsung Galaxy Note A 14",
        productDesc:"5G(8GB +256GB ROM)",
        productPrice:"₦150,000",
        review:"⭐⭐⭐⭐⭐",
        reviewCount:"(21 reviews)",
        category: "phones"
      },
   
    ];
  
    const filterProducts = (products, category) => {
      if (category === 'all') {
        return products;
      } else {
        return products.filter(product => product.category === category);
      }
    };
  
    const filteredProducts = filterProducts(products, category);
  
    return (
      <div className="grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {filteredProducts.map(product => (
          <Link key={product.id} to={`/products/${product.id}`} className="focus:outline-none">
            <ProductCards
              imageSrc={product.imageSrc}
              productName={product.productName}
              productDesc={product.productDesc}
              productPrice={product.productPrice}
              review={product.review}
              reviewCount={product.reviewCount}
            />
          </Link>
        ))}
      </div>
    );
  };
  
  Products.propTypes = {
    category: PropTypes.string.isRequired,
  };
export default Products;
