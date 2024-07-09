import { Link } from "react-router-dom";
import Nav from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";

const AllItems = () => {
  return (
    <div>
      <div className="py-10 mt-4 w-full flex flex-col gap-4 lg:px-[5%]">
        <h2 className="text-2xl font-bold mb-4"> Cart<span className="font-semibold text-base"> All Items(3)</span></h2>
        <div className="flex items-center py-4 bg-white shadow-lg rounded-sm">
          <div className="w-6 h-6 flex items-center justify-center rounded">
            <span className="material-symbols-outlined text-white bg-btn">check</span>
          </div>
          <img src="1.png" alt="Product" className="w-16 h-16 ml-4" />
          <div className="flex flex-col ml-4">
            <p className="text-base font-semibold">Samsung Galaxy S24 Ultra 5G (12GB+512GB) Dual Sim</p>
            <p className="text-sm text-black font-semibold font-roboto mt-2">#1,300,000</p>
            <div className="flex items-center mt-2 space-x-2">
              <button className="px-3 py-1 border rounded-md">-</button>
              <span>1</span>
              <button className="px-3 py-1 border rounded-md">+</button>
            </div>
          </div>
          <span className="material-symbols-outlined text-black ml-auto cursor-pointer">delete</span>
        </div>
        <div className="flex items-center py-4 bg-white shadow-lg rounded-sm">
          <div className="w-6 h-6 flex items-center justify-center rounded">
            <span className="material-symbols-outlined text-white bg-btn">check</span>
          </div>
          <img src="11.png" alt="Product" className="w-16 h-16 ml-4" />
          <div className="flex flex-col ml-4">
            <p className="text-base font-semibold">Samsung Galaxy S24 Ultra 5G (12GB+512GB) Dual Sim</p>
            <p className="text-sm text-black font-semibold font-roboto mt-2">#345,000</p>
            <div className="flex items-center mt-2 space-x-2">
              <button className="px-3 py-1 border rounded-md">-</button>
              <span>1</span>
              <button className="px-3 py-1 border rounded-md">+</button>
            </div>
          </div>
          <span className="material-symbols-outlined text-black ml-auto cursor-pointer">delete</span>
        </div>
        <div className="flex items-center py-4 bg-white shadow-lg rounded-sm">
          <div className="w-6 h-6 flex items-center justify-center rounded">
            <span className="material-symbols-outlined text-white bg-btn">check</span>
          </div>
          <img src="2.png" alt="Product" className="w-16 h-16 ml-4" />
          <div className="flex flex-col ml-4">
            <p className="text-base font-semibold">Samsung Galaxy Fold z (12GB+512GB) Dual Sim</p>
            <p className="text-sm text-black font-semibold font-roboto mt-2">#760,000</p>
            <div className="flex items-center mt-2 space-x-2">
              <button className="px-3 py-1 border rounded-md">-</button>
              <span>1</span>
              <button className="px-3 py-1 border rounded-md">+</button>
            </div>
          </div>
          <span className="material-symbols-outlined text-black ml-auto cursor-pointer">delete</span>
        </div>
        <Link to="/"
  className="ml-4 pr-14 pl-8 w-32 rounded-full border-btn border-2 text-btn">
  Continue Shopping
</Link>

      </div>
      
    </div>
  );
};

const OrderSummary = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-lg font-bold font-mon text-base mt-10">
      <h3 className="font-semibold text-2xl mb-2 text-center">Order Summary</h3>
      <div className="flex w-full justify-between items-center">
        <p className="my-2">Sub-Total:</p>
        <p>#2,110,000.00</p>
      </div>
      <div className="flex w-full justify-between items-center">
        <p className="my-2">Delivery Fee:</p>
        <p>#4,000.00</p>
      </div>
      <div className="flex w-full justify-between items-center">
        <p className="my-2">Discount:</p>
        <p>#0.00</p>
      </div>
      <div className="flex w-full justify-between items-center">
        <p className="my-2 text-2xl">Total</p>
        <p>#2,114,000.00</p>
      </div>
      <Link to="/checkout" type="submit" className="w-full bg-btn text-white py-2 px-6 mt-2 rounded-full">
        Checkout
      </Link>
      <p className="font-medium mt-2">
        By placing this order, you agree to our <span className="text-btn">Terms and Conditions</span> and <span className="text-btn">Privacy Policy</span>
      </p>
    </div>
  );
};

const Cart = () => {
  return (
    <div className="w-full font-mont bg-white text-black">
      <Nav />
      <div className="mt-8 px-[5%] lg:px-0 flex flex-col lg:flex-row justify-between w-full">
        <div className="flex flex-col lg:w-[55%]">
          <AllItems />
        </div>
        <div className="lg:w-[35%] mt-8 lg:mt-0">
          <OrderSummary />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
