
import Footer from '../../components/footer/Footer';
import Nav from '../../components/navbar/Nav';

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
        <p className='text-btn mt-8'>View Receipt</p>
      </div>
    </div>
  );
};
const Checkout = () => {
  return (
    <div>
      <Nav/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-16">
      <img src="check.png" className="text-btn text-8xl mb-4" />
      <h2 className="text-2xl font-bold mb-6 text-center">Thank you for placing your order</h2>
      <OrderSummary />
    </div>
    <Footer/>
    </div>
  );
};

export default Checkout;