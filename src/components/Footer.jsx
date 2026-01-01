function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-400">

        
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">
            Weebu 2.0
          </h3>
          <p className="text-sm">
            Simple and modern shopping experience with fast delivery
            and reliable service.
          </p>
        </div>

        <div>
          <h4 className="text-white text-lg font-semibold mb-3">
            Links
          </h4>
          <ul className="space-y-2 text-sm">
            <h3 className="hover:text-white cursor-pointer">About Us</h3>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Terms & policy</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-lg font-semibold mb-3">
            Address
          </h4>
          <p className="text-sm">
            Vadodara, Gujarat<br />
            India
          </p>
        </div>

        <div>
          <h4 className="text-white text-lg font-semibold mb-3">
            About us
          </h4>
          <p className="text-sm">
            Weebu 2.0 is a modern online shopping platform built with simplicity and reliability in mind. Our goal is to provide a smooth and hassle-free shopping experience with a clean interface and easy navigation.
            
          </p>
        </div>

      </div>

      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        Weebu 2.0. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
