import { useEffect, useState } from "react";

function Products({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <h1 className="text-3xl font-bold text-center mb-10">
        PRODUCTS
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
          products ?
             products.map((product) => (

          <div
            key={product.id}
            className="bg-black   p-4 rounded flex flex-col hover:translate-x-2 duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 mx-auto object-contain bg-white p-2 rounded mb-4"
            />

            <h3 className="text-m font-semibold mb-2 line-clamp-2">
              {product.title}
            </h3>

            <p className="text-white text-sm mb-4">
              ${product.price}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="mt-auto bg-white text-black py-2 rounded hover:bg-black hover:text-white hover:border duration-300 transition"
            >
              Add to Cart
            </button>
          </div>
        )):
        <p>Loading....</p>
        }
      </div>
    </div>
  );
}
export default Products;
