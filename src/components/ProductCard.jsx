import { Link } from "react-router-dom";
export default function ProductCard({ title, category, price, thumbnail , id }) 

{
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
      
      <div className="overflow-hidden">
        <Link to={`/dynamic-page/${id}`} ><img
          src={thumbnail}
          alt="product"
          className="w-full h-64 object-cover hover:scale-110 transition duration-300"
        /></Link>
        
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">
          {category}
        </h3>

        <p className="text-gray-500 mb-4">
          {title}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-[#282d9b] text-2xl font-bold">
            ${price}
          </span>

          <button className="bg-[#282d9b] text-white px-4 py-2 rounded-lg hover:bg-[#1f247d]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
