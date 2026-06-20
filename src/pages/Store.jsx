import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import { Link, useParams } from "react-router-dom";

export default function Store() {
    const { slug } = useParams();

    const [Products, setProducts] = useState([]);
    const [loading, setloading] = useState(false);
    const [categories, setCategories] = useState([]);

    // Products Fetch
    useEffect(() => {
        let API = "https://dummyjson.com/products";

        if (slug) {
            API = `https://dummyjson.com/products/category/${slug}`;
        }

        const fetchProducts = async () => {
            setloading(true);

            try {
                const response = await axios.get(API);
                setProducts(response.data.products);
            } catch (error) {
                console.error(error);
                setProducts([]);
            } finally {
                setloading(false);
            }
        };

        fetchProducts();
    }, [slug]); // slug change hone par dubara chalega

    // Categories Fetch
    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await axios.get(
                    "https://dummyjson.com/products/categories"
                );
                setCategories(response.data);
            } catch (error) {
                console.error(error);
                setCategories([]);
            }
        };

        getCategories();
    }, []);

   return (
    <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-10 py-8 mt-18">
        <div className="flex flex-col lg:flex-row gap-8">

            <aside className="w-full lg:w-[320px] shrink-0">
                <div className="sticky top-24 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                    <h2 className="text-xl font-semibold text-gray-900 mb-5">
                        Categories
                    </h2>

                    <Link
                        to="/store"
                        className={`block px-4 py-3 rounded-xl mb-2 transition-all duration-200 ${
                            !slug
                                ? "bg-[#282d9b] text-white"
                                : "bg-gray-50 hover:bg-[#282d9b] hover:text-white"
                        }`}
                    >
                        All Products
                    </Link>

                    {categories.map((category) => (
                        <Link
                            key={category.slug}
                            to={`/store/${category.slug}`}
                            className={`block px-4 py-3 rounded-xl mb-2 capitalize transition-all duration-200 ${
                                slug === category.slug
                                    ? "bg-[#282d9b] text-white"
                                    : "bg-gray-50 hover:bg-[#282d9b] hover:text-white"
                            }`}
                        >
                            {category.name}
                        </Link>
                    ))}
                </div>
            </aside>

            <div className="flex-1">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 capitalize">
                            {slug
                                ? slug.replaceAll("-", " ")
                                : "All Products"}
                        </h1>

                        <p className="text-gray-500 mt-1">
                            Browse and explore our latest collection
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="bg-white border border-gray-200 px-4 py-3 rounded-xl text-sm">
                            Total Products:{" "}
                            <span className="font-semibold">
                                {Products.length}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-[#282d9b]"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">

                    {loading
                        ? [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                              <ProductCardSkeleton key={item} />
                          ))
                        : Products.map((data) => (
                              <ProductCard
                                  key={data.id}
                                  thumbnail={data.thumbnail}
                                  title={data.title}
                                  category={data.category}
                                  price={data.price}
                                  id={data.id}
                              />
                          ))}
                </div>

                {!loading && Products.length === 0 && (
                    <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center mt-8">
                        <h3 className="text-xl font-semibold text-gray-800">
                            No Products Found
                        </h3>

                        <p className="text-gray-500 mt-2">
                            Try selecting another category.
                        </p>
                    </div>
                )}
            </div>
        </div>
    </div>
);
}