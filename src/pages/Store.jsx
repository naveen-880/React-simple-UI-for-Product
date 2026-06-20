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
        <div className="flex mt-18">
            {/* Sidebar */}
            <div className="w-[256px] p-4">
                <h2 className="font-bold text-xl my-2">Filter</h2>

                <div className="flex flex-col gap-2">
                    <Link
                        to="/store"
                        className="shadow p-2 rounded-sm text-sm hover:font-bold"
                    >
                        All Products
                    </Link>

                    {categories.map((category) => (
                        <Link
                            key={category.slug}
                            to={`/store/${category.slug}`}
                            className="shadow p-2 rounded-sm text-sm hover:font-bold hover:bg-[#282d9b] "
                        >
                            {category.name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Products */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 content-start">
                {loading
                    ? [1, 2, 3, 4, 5, 6].map((item) => (
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
        </div>
    );
}