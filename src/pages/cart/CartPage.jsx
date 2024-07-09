import { Link } from "react-router-dom";
import Nav from "../../components/navbar/Nav";

const ProgressIndicator = () => {
  return (
    <div className="flex justify-left items-center mt-8 ml-16">
      <div className="flex flc items-center">
        <div className="w-10  text-gray font-medium flex justify-center items-center ">
          Cart <span className="text-black ml-4"></span>
        </div>
        <div className="h-1  w-28"></div>
      </div>
      <div className="flex items-center">
        <div className=" text-black font-medium flex justify-center items-center ">
          Shipping Information and Payment
        </div>
        <div className="h-1  w-28"></div>
      </div>
      <div className="flex items-center">
        <div className="  text-gray font-bold flex justify-center items-center ">
          Confirmation
        </div>
      </div>
    </div>
  );
};

const ShippingAddressForm = () => {
  return (
    <form className="space-y-4">
      <div className="flex space-x-4">
       
        
      </div>
      <div>
        <label className="block text-sm font-medium"></label>
        <input
          type="text"
          placeholder="First name"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium"></label>
        <input
          type="text"
          placeholder="Last name"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="flex space-x-4">
        <div className="flex-">
          <label className="block text-sm font-medium">
            
          </label>
          <input
            type="text"
            placeholder="+234"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium">
            
          </label>
          <input
            type="text"
            placeholder="Phone number"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        </div>
      <div>
        <label className="block text-sm font-medium"></label>
        <input
          type="text"
          placeholder="Enter Address"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">
         
        </label>
        <input
          type="text"
          placeholder="Apartment Number"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-sm font-medium">
           
          </label>
          <input
            type="text"
            placeholder="Select City"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium"></label>
          <input
            type="text"
            placeholder="Select State"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium">
          
        </label>
        <input
          type="text"
          placeholder="Postal Code"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
     
      <div className="flex items-left   bg-gray-100">
      <label className="flex items-center cursor-pointer text-lg">
        <input type="radio" name="address" value="address" className="hidden" />
        <span className="w-2 h-2 border-2 border-black bg-white mr-3 rounded-none relative">
          
        </span>
        Save my address details for future purchases
      </label>
    </div>
    </form>
  );
};

const OrderSummary = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-lg font-bold font-mon text-base">
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
      
      <Link to="/checkout"
        type="submit"
        className="w-full bg-btn text-white py-2 mt-2 rounded-full p-16"
      >
        Checkout
      </Link>
      <p className="font-medium mt-2">By placing this order, you agree to our <span className="text-btn">Terms and Conditions</span> and <span className="text-btn">Privacy Policy</span></p>
    </div>
    
    
  );
};



const CartPage = () => {
  return (
    <div className="w-full font-montserrat bg-white text-black">
      <Nav/>
      <div className="py-[5%] mt-16 w-full flex flex-col justify-between gap-4 lg:px-[5%]">
        <ProgressIndicator />
        <div className="mt-8 px-[5%] lg:px-0 flex lg:flex-row flex-col justify-between w-full">
          <div className="flex flex-col lg:w-[45%]">
            <h2 className="text-2xl font-semibold mb-4">Shipping Address</h2>
            <ShippingAddressForm />
          </div>
          <div className="lg:w-1/3 mt-8 py-6 space-y-10">
            <OrderSummary />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;