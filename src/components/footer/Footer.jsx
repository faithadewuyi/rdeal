

const Footer = () => {
  return (
    <footer className="bg-footer">
      <div className='container py-14'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div className="space-y-3 lg:max-w[300px]">
            <img src="logo.png" alt="logo"/>
            <p className="font-mon font-bold ">Explore our extensive collection of Samsung cutting-edge smartphones, designed to elevate your tech experience.</p>
            <div className="flex space-x-2 pt-3 md:pt-0 mt-4">
              <i className="bx bx-sm bxl-facebook-circle"></i>
              <i className="bx bx-sm bxl-instagram"></i>
              <i className="bx bx-sm bxl-twitter"></i>
              <i className="bx bx-sm bxl-linkedin"></i>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            <div>
              <h1 className="font-bold text-2xl"> Company</h1>
              <ul>
                <li className="footer-link font-semibold mt-4">About</li>
                <li className="footer-link font-semibold mt-4">Contact Us</li>
                <li className="footer-link font-semibold mt-4">Support</li>
                <li className="footer-link font-semibold mt-4">Affilate</li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-2xl"> Help</h1>
              <ul>
                <li className="footer-link font-semibold mt-4">Return Policy</li>
                <li className="footer-link font-semibold mt-4">Customer Service</li>
                <li className="footer-link font-semibold mt-4">Legal and Privacy</li>
                <li className="footer-link font-semibold mt-4">Location</li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-2xl"> My Account</h1>
              <ul>
                <li className="footer-link font-semibold mt-4">My Profile</li>
                <li className="footer-link font-semibold mt-4">Orders History</li>
                <li className="footer-link font-semibold mt-4">My Wishlist</li>
                <li className="footer-link font-semibold mt-4">Order Tracking</li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-2xl"> Legal</h1>
              <ul>
                <li className="footer-link font-semibold mt-4">Terms and Conditions</li>
                <li className="footer-link font-semibold mt-4">Privacy</li>
                
              </ul>
            </div>
          </div>
    
        </div>
        <h3 className="text-center font-mon font-medium text-xl mt-8">PAYMENT METHODS</h3>
        <div className="flex space-x-2 pt-3 md:pt-0 mt-4 items-center justify-center">
        <img src="a.png"/>
        <img src="b.png"/>
        <img src="c.png"/>
        <img src="d.png"/>
        
        </div>
      </div>
    </footer>
  )
}

export default Footer
