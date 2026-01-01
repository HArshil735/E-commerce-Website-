import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="bg-black border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        
        <h1 to="/" className="text-white text-xl font-bold">
          Weebu 2.0
        </h1>

        <div className="flex gap-6 text-gray-300">
          <Link
            to="/"
            className="relative group hover:text-white transition"
          >
            Home
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/products"
            className="relative group hover:text-white transition"
          >
            Products
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/cart"
            className="relative group hover:text-white transition"
          >
            Cart
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/login"
            className="relative group hover:text-white transition"
          >
            Login
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

      </div>
    </nav>
  );
}
export default Navbar;
