import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// 
import ProductPage from './pages/productPage/ProductPage';
import ProductDetailsPage from './pages/productPage/ProductDetailsPage';
import CartPage from './pages/cart/CartPage';
import Checkout from './pages/Checkout/Checkout';
const App = () => {
// import Products from './pages/productPage/Products';
  return (
    <Router>
      <Routes>
        {/* <Route path="/#products" element={<Products category="all" />} />*/}
        <Route path="/products/:productId" element={<ProductDetailsPage />} />
        <Route path="/" element= {<ProductPage/>}/>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      
    </Router>
  );
};

export default App;
