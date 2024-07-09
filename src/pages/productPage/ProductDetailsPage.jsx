import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Nav from '../../components/navbar/Nav';
const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

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
   
    // Add more products as needed
  ];

  useEffect(() => {
    const selectedProduct = products.find(prod => prod.id === parseInt(productId));
    setProduct(selectedProduct);
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full">
      <Nav/>
    <div className="container mt-10 mx-auto px-6 py-8">
      <div className="flex">
      <div className="shadow-2xl">
        <img src={product.imageSrc} alt={product.productName} />
      </div>
      <div className="w-1/2 pl-6">
      <h2 className="text-2xl font-bold mt-2">{product.productName}</h2>
      
      <p className="mt-4 text-2xl font-medium">{product.productDesc}</p>
      <p className=" text-2xl font-medium mt-4 mb-4">Price: {product.productPrice}</p>
      <Link to="/" 
      className="mt-10 pt-4 font-bold text-btn text-4xl">See More Products
      </Link>
      </div>
      </div>
      
      
    </div>
    </div>
  );
};

export default ProductDetailsPage;
