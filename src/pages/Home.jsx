import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-black text-white">

     {/* Actor */}
      <section className="h-[70vh] flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Weebu 2.0
          </h1>

          <p className="text-gray-500 mb-8">
          high quality products
            and trusted service.
          </p>

          <Link
            to="/products"
            className="inline-block bg-white text-black px-6 py-3 rounded hover:bg-black duration-300 hover:text-white hover:border transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* attraction */}
      <section className="py-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-semibold text-center mb-10">
            Why Weebu 2.0?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-zinc-900 p-6 rounded text-center">
              <h3 className="text-lg font-semibold mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-400 text-sm">
                 products delivered quickly and safely.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded text-center">
              <h3 className="text-lg font-semibold mb-2">
                Replacement
              </h3>
              <p className="text-gray-400 text-sm">
                Easy & free replacement process.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded text-center">
              <h3 className="text-lg font-semibold mb-2">
                Customer Care
              </h3>
              <p className="text-gray-400 text-sm">
                24/7 whenever you need help.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
