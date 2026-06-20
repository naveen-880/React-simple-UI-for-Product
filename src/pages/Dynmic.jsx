import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Dynamic() {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
        setProduct({});
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-14 h-14 border-4 border-[#282d9b] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-10 p-8">
          
          {/* Image Section */}
          <div className="flex justify-center items-center bg-gray-50 rounded-xl p-6">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full max-w-md object-contain hover:scale-105 transition duration-300"
            />
          </div>

          {/* Details Section */}
          <div>
            <span className="bg-[#282d9b] text-white px-3 py-1 rounded-full text-sm">
              {product.category}
            </span>

            <h1 className="text-4xl font-bold mt-4 text-gray-800">
              {product.title}
            </h1>

            <p className="text-gray-600 mt-4 leading-relaxed">
              {product.description}
            </p>

            <div className="mt-6 flex items-center gap-4">
              <h2 className="text-4xl font-bold text-[#282d9b]">
                ${product.price}
              </h2>

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg">
                In Stock ({product.stock})
              </span>
            </div>

            <div className="mt-4">
              <span className="text-yellow-500 text-xl">
                ⭐ {product.rating}
              </span>
            </div>

            <div className="mt-8 flex gap-4">
              <button className="bg-[#282d9b] text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
                Add to Cart
              </button>

              <button className="border border-[#282d9b] text-[#282d9b] px-6 py-3 rounded-lg hover:bg-[#282d9b] hover:text-white transition">
                Buy Now
              </button>
            </div>

            <div className="mt-8 border-t pt-6">
              <h3 className="font-semibold text-lg mb-3">
                Product Information
              </h3>

              <div className="space-y-2 text-gray-600">
                <p>
                  <span className="font-medium">Category:</span>{" "}
                  {product.category}
                </p>

                <p>
                  <span className="font-medium">Rating:</span>{" "}
                  {product.rating}
                </p>

                <p>
                  <span className="font-medium">Available Stock:</span>{" "}
                  {product.stock}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}