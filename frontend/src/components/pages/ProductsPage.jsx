import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../layouts/Header";

const apiUrl = import.meta.env.VITE_API_URL;

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/product`);
      setProducts(response.data);
      setFilteredProducts(response.data);
      extractCategories(response.data);
      setLoading(false);
    } catch (error) {
      setError("Please try again later.");
      setLoading(false);
    }
  };

  const extractCategories = (products) => {
    const allCategories = products.map((product) => product.category);
    const uniqueCategories = ["All", ...new Set(allCategories)];
    setCategories(uniqueCategories);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  const getImageUrl = (product) => {
    if (
      product.imageUrl &&
      Array.isArray(product.imageUrl) &&
      product.imageUrl.length > 0
    ) {
      return `${apiUrl}/${product.imageUrl[0]}`;
    } else if (product.imageUrl && typeof product.imageUrl === "string") {
      return `${apiUrl}/${product.imageUrl}`;
    }
  };

  // Navigate with state to hide Buy Now button
  const goToProduct = (productId) => {
    navigate(`/product/${productId}`, { state: { fromProductsPage: true } });
  };

  return (
   <div>
    <Header/>
     <div className="min-h-screen h-full container w-full mx-auto">
      <div className="w-full h-50 bg-[#FFF5F5] flex flex-col items-center justify-center text-center p-6 mb-3">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Our Products
        </h1>
        <p className="text-sm mt-2 text-gray-700">
          Optimize your business for faster and smoother operations
        </p>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row mb-20 ml-2">
        <div className="hidden md:block lg:w-1/4 xl:w-1/5 border border-gray-200 p-4 rounded-lg backdrop-blur-lg shadow-lg">
          <h2 className="text-lg font-bold mb-3">Categories</h2>
          <ul>
            {categories.sort().map((category, index) => (
              <li
                key={index}
                onClick={() => handleCategoryChange(category)}
                className={`cursor-pointer py-2 px-3 rounded-lg mb-2 ${
                  selectedCategory === category
                    ? "bg-[#becdd750] border border-gray-100"
                    : "hover:bg-[#e8ebed50]"
                }`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Category for Mobile */}
        <div className="block md:hidden w-full mb-2 px-4 h-auto">
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Product Listing */}
        <div className="w-full md:w-3/4 p-4 ml-10">
          {error && <div className="text-red-500 text-center my-6">{error}</div>}

          {loading ? (
            <p className="text-center text-gray-500 my-6">Loading products...</p>
          ) : filteredProducts.length === 0 ? (
            <p className="text-center text-gray-500 my-6">
              No products available in this category.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-2 lg:gap-6 px-1 py-3 xl:px-5">
              {filteredProducts.map((product) => (
                <div
                  key={product._id}
                  className="border border-gray-200 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-lg w-full max-w-sm mx-auto"
                >

                  {/* Use navigate */}
                  <div onClick={() => goToProduct(product._id)}>
                    <img
                      src={getImageUrl(product)}
                      className="w-full h-60 object-cover p-2 rounded-xl border-b border-gray-200 cursor-pointer"
                      alt={product.productName}
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="underline underline-offset-2 text-sm font-semibold">
                      {product.productName}
                    </h2>
                    <p className="text-xs mt-2">
                      {product.description &&
                        product.description.split(".")[0]}
                    </p>
                    <div className="flex justify-between mt-4">
                      <Link
                        to={`/product/${product._id}`}
                        className="text-sm hover:underline flex"
                      >
                        Learn More
                        <span className="mt-1 ml-1">
                          <FaArrowAltCircleRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
   </div>
  );
};

export default ProductsPage;
