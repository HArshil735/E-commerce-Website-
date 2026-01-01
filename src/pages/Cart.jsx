import { Link } from "react-router-dom";

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-center mb-10">
          My Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center text-WHITE ">
            <p className="mb-6">NOTHING</p>
            <Link
              to="/products"
              className="inline-block bg-white text-black px-6 py-2 rounded hover:bg-black hover:text-white hover:border duration-300 transition"
            >
              Go to Products
            </Link>
          </div>
        ) : (
          <>
            {/* THINGS*/}
            <div className="space-y-4 mb-8">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-zinc-900 p-4 rounded"
                >               
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-16 w-16 object-contain bg-white p-2 rounded"
                    />

                    <div>
                      <h3 className="text-sm font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        ${item.price}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-sm text-red-400 hover:text-red-600 duration-300"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>       
            <div className="flex justify-between items-center mb-6 border-t border-gray-800 pt-4">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-lg font-semibold">
                ${total.toFixed(2)}
              </span>
            </div>

            <Link
              to="/checkout"
              className="block text-center bg-white text-black py-3 rounded hover:bg-black hover:text-white duration-300 hover:border transition"
            >
              Proceed to Checkout
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
