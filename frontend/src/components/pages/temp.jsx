import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [showBuyNow, setShowBuyNow] = useState(false);

  useEffect(() => {
    fetchProductDetails();
    // Check if the product was accessed from ProductsPage or not
    if (!location.state || !location.state.fromProductsPage) {
      setShowBuyNow(true); // Show Buy Now if directly accessed
    } else {
      setShowBuyNow(false); // Hide Buy Now if navigated from ProductsPage
    }
  }, [id, location]);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/product/${id}`);
      setProduct(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product details:", error);
      setLoading(false);
    }
  };


  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto border border-gray-200 rounded-lg shadow-lg p-4">
        

        {/* Conditionally Show Buy Now */}
        {showBuyNow && (
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg">
            Other Products
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
