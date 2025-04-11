import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";
import { TiArrowForward } from "react-icons/ti";
import { FaCircleDot } from "react-icons/fa6";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import Header from "../layouts/Header";



const apiUrl = import.meta.env.VITE_API_URL;

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredBenefitIndex, setHoveredBenefitIndex] = useState(null);
 
  useEffect(() => {
    fetchProduct();

  }, []);

  useEffect(() => {
    if (!product) return;

    const images = getProductImages();
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [product]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/product/${id}`);
      if (response.data) {
        setProduct(response.data);
      } else {
        setError("Product not found.");
      }
    } catch (error) {
      setError("Failed to load product. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const getProductImage = () => {
    if (!product) return [];

    if (product.imageUrl && Array.isArray(product.imageUrl)) {
      return product.imageUrl.map((img) => `${apiUrl}/${img}`);
    } else if (product.imageUrl && typeof product.imageUrl === "string") {
      return [`${apiUrl}/${product.imageUrl}`];
    }
    return [];
  };

  const getProductImages = () => {
    if (!product) return [];

    if (product.gallery && Array.isArray(product.gallery)) {
      return product.gallery.map((img) => `${apiUrl}/${img}`);
    } else if (product.gallery && typeof product.gallery === "string") {
      return [`${apiUrl}/${product.gallery}`];
    }
    return [];
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-black"></div>
      </div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center text-red-500 my-10 p-6 bg-red-50 rounded-lg shadow"
      >
        {error}
      </motion.div>
    );
  }

  const productImage = getProductImage();
  const productImages = getProductImages();

  // Animation
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        stagger: 0.2,
      },
    },
  };

  return (
    <div>
 
    <Header/>

 
    <div className="container mx-auto  p-2 sm:p-6 overflow-hidden">
       
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col md:flex-row items-center justify-evenly bg-gradient-to-br from-[#f0f2fa] to-[#e5e8f4] p-6 rounded-lg shadow-lg"
      >
        <motion.div
          className="md:w-1/2 text-left order-2 md:order-1 w-full overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="lg:text-xl xl:text-2xl font-bold mb-4 relative inline-block">
            {product.productName || "Unnamed Product"}
            <motion.span
              className="absolute bottom-0 left-0 h-1 bg-blue-500 rounded"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 0.6 }}
            />
          </h2>
          <motion.div
            className="text-[12px] lg:text-base space-y-2 overflow-hidden overflow-y-hidden"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {product.description
              ? product.description
                  .split(".")
                  .filter((des) => des.trim())
                  .map((des, index) => (
                    <motion.p
                      key={index}
                      className="flex items-start"
                      variants={fadeIn}
                    >
                      <motion.span
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        <TiArrowForward className="mt-1 md:mt-0.5 lg:mt-1 w-10 text-blue-500" />
                      </motion.span>
                      <span className="text-gray-700 w-full">
                        {des.trim()}.
                      </span>
                    </motion.p>
                  ))
              : "No description available."}
          </motion.div>

          <div className="flex gap-5 md:mt-10 py-5 ">

        {product.productLink ? (
  <button
    className="bg-black text-[13px] px-2 md:px-4 md:py-2 md:text-sm rounded-lg mt-5 text-white hover:bg-cyan-500 transition duration-300 hover:scale-105"
    onClick={() => window.open(product.productLink, "_blank")}
  >
    Try Now
  </button>
) : null }

            <button
              className="bg-blue-500 text-[13px] md:text-sm px-4 py-2 rounded-lg mt-5 text-white hover:bg-blue-700 transition hover:scale-105"
              onClick={() => navigate("/contact")}
            >
              Book A Demo
            </button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="w-full h-60 mb-10 md:h-auto md:w-96 md:ml-5 md:-mt-10 lg:-mt-0 flex justify-center order-1 md:order-2 shadow-lg rounded-lg overflow-hidden shadow-blue-400"
          initial={{ opacity: 0, x: 50, rotate: -3 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileHover={{ scale: 1.03, rotate: 0 }}
        >
          <img
            src={productImage[0] || "/placeholder.jpg"}
            alt={product.productName || "Product Image"}
            className="w-full md:h-60 lg:h-96 object-cover transition-all duration-700 hover:scale-110"
          />
        </motion.div>
      </motion.div>

      {/* Why Choose Section */}
      <motion.div
        className="mt-16 w-full mx-auto text-center overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <motion.h1
          className="md:text-xl lg:text-2xl font-semibold relative inline-block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose{" "}
          <span className="text-blue-600">
            {product.productName || "This Product"}
          </span>
          ?
          <motion.div
            className="h-1 w-24 bg-blue-500 mx-auto mt-2 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.h1>
        <motion.p
          className="mt-5 text-gray-700 max-w-4xl mx-auto text-[12px] sm:text-sm lg:text-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {product.why_choose_des || "No information available."}
        </motion.p>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-col-3 max-w-7xl mx-auto xl:py-5 pb-5"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {product.benefits && product.benefits.length > 0 ? (
          product.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="shadow-lg p-6 text-center bg-white rounded-lg border border-gray-100 hover:shadow-xl transition overflow-hidden relative"
              variants={fadeIn}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 },
              }}
              onMouseEnter={() => setHoveredBenefitIndex(index)}
              onMouseLeave={() => setHoveredBenefitIndex(null)}
            >
              <motion.div
                className="absolute inset-0  rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredBenefitIndex === index ? 0.4 : 0 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="absolute top-0 left-0 w-2 h-full bg-blue-500"
                initial={{ height: 0 }}
                animate={{
                  height: hoveredBenefitIndex === index ? "100%" : "0%",
                }}
                transition={{ duration: 0.3 }}
              />

              <h3 className="mt-4 text-[14px] md:text-[16px] lg:text-lg font-semibold text-gray-800">
                {benefit.title}
              </h3>
              <p className="mt-2 text-gray-600 text-[12px] md:text-sm relative z-10">
                {benefit.description}
              </p>
            </motion.div>
          ))
        ) : (
          <motion.div className="col-span-3 text-center text-gray-500">
            No benefits available for this product.
          </motion.div>
        )}
      </motion.div>

      {/* Who Needs Section */}
      <motion.div
        className="mt-16 w-full mx-auto text-center flex flex-col overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <motion.h1
          className="md:text-xl lg:text-2xl font-semibold relative inline-block mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Who Needs{" "}
          <span className="text-blue-600 mr-1">
            {product.productName || "This Product"}
          </span>
          ?
          <motion.div
            className="h-1 w-24 bg-blue-500 mx-auto mt-2 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.h1>
        <motion.div
          className="mt-8 text-gray-800 max-w-3xl mx-auto flex flex-col text-xl overflow-hidden"
          variants={stagger}
        >
          {product.who_need_des
            ? product.who_need_des
                .split(".")
                .filter((sentence) => sentence.trim())
                .map((sentence, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-3 w-full text-left py-2 text-[14px] md:text-[16px]"
                    variants={fadeIn}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="text-blue-500"
                    >
                      <MdOutlineSubdirectoryArrowRight />
                    </motion.span>
                    <span className="text-[13px] md:text-[16px] lg:text-lg">
                      {sentence.trim()}
                    </span>
                  </motion.div>
                ))
            : "No information available."}
        </motion.div>
      </motion.div>

      {/* Product Images */}
      <motion.div
  className="mt-16 w-full mx-auto text-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={fadeIn}
>
  {productImages.length > 0 ? (
    <>
      <motion.h1
        className="text-lg lg:text-2xl font-semibold md:mb-6 relative inline-block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Product Images
        <motion.div
          className="h-1 w-24 bg-blue-500 mx-auto mt-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />
      </motion.h1>
      <motion.div
        className="flex flex-wrap gap-4 justify-center py-10"
        variants={stagger}
      >
        {productImages.map((img, index) => (
          <motion.div
            key={index}
            className="w-full h-52 md:w-80 md:h-56 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 relative group z-20"
            variants={fadeIn}
            whileHover={{
              y: -8,
              transition: { duration: 0.3 },
            }}
          >
            <img
              src={img}
              alt={`${product.productName || "Product"} - Image ${
                index + 1
              }`}
              className="w-full h-full border border-gray-100 object-center transition-all transform hover:scale-150"
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  ) : null}
</motion.div>

      {/* Testimonials Section */}
      {product.customerTestimonials.length > 0 ? (
              <motion.div
        className="mt-16 w-full mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <motion.h1
          className="text-lg md:text-lg lg:text-2xl font-semibold relative inline-block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          What Our Customers Say
          <motion.div
            className="h-1 w-24 bg-blue-500 mx-auto mt-2 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.h1>
        <motion.div
  className="md:mt-8 flex flex-wrap gap-8 justify-center max-w-7xl mx-auto py-5"
  variants={stagger}
>
  {product.customerTestimonials &&
  product.customerTestimonials.length > 0 ? (
    product.customerTestimonials.map((testimonial, index) => (
      <motion.div
        key={index}
        className="shadow-lg p-6 text-center bg-white rounded-lg border border-gray-100 hover:shadow-xl transition overflow-hidden flex-grow flex-shrink-0 basis-80"
        variants={fadeIn}
        whileHover={{
          y: -5,
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          transition: { duration: 0.3 },
        }}
      >
        <p className="text-gray-700 italic">
          "{testimonial.description}"
        </p>
        <h3 className="mt-4 md:text-lg font-semibold text-gray-800">
          {testimonial.clientName}
        </h3>
        <p className="text-sm text-gray-500">
          {testimonial.companyName}
        </p>
      </motion.div>
    ))
  ) : (
    <motion.div
      className="w-full text-center text-gray-500"
      variants={fadeIn}
    >
      No testimonials available for this product.
    </motion.div>
  )}
</motion.div>
      </motion.div>
      ): null}

      {/* Product Plans Section */}
      {product.plans.length > 0 ? (
          <motion.div
          className="mt-16 w-full mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <motion.h1
            className="text-lg lg:text-2xl font-semibold relative inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}  >
            Our Product Plans
            <motion.div
              className="h-1 w-24 bg-blue-500 mx-auto mt-2 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ delay: 0.3, duration: 0.6 }} />
          </motion.h1>
          <motion.div
  className="w-full mx-auto mt-12 flex flex-wrap justify-center gap-8 py-5"
  variants={stagger} >
  {product.plans && product.plans.length > 0 ? (
    product.plans.map((plan, index) => (
      <motion.div
        key={index}
        className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-lg p-6 w-70 hover:shadow-xl transition relative overflow-hidden flex-grow flex-shrink-0 basis-64"
        variants={fadeIn}
        whileHover={{
          y: -8,
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          transition: { duration: 0.3 },
        }}
      >
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 bg-blue-500 rounded-bl-full -translate-y-10 translate-x-10"
          initial={{ translateY: -50, translateX: 50 }}
          whileInView={{ translateY: -30, translateX: 30 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />
        <div className="flex justify-between">
          <h2 className="text-xl font-bold text-gray-800">
            {plan.name}
          </h2>
        </div>

        <p className="text-sm text-gray-500 mt-5">
          Perfect for unlocking{" "}
          <span className="text-blue-600 ">{plan.name}</span> benefits
        </p>
        <motion.p
          className="text-2xl font-bold text-gray-800 mt-4"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          ₹{String(plan.price).split("/")[0]}
          {plan.price.includes("/") && (
            <span className="text-sm font-normal text-gray-500">
              /{String(plan.price).split("/")[1]}
            </span>
          )}
        </motion.p>

        <motion.div
          className="mt-5 text-gray-700 max-w-3xl mx-auto"
          variants={stagger}
        >
          {plan.features ? (
            <div className="flex flex-col gap-2">
              {plan.features
                .split(".")
                .filter((sentence) => sentence.trim())
                .map((sentence, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-3 items-start w-full"
                    variants={fadeIn}
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <motion.span
                      className="mt-0.5 text-blue-600 text-[12px]"
                      whileHover={{ scale: 1.2 }}
                    >
                      <FaCircleDot />
                    </motion.span>
                    <span className="text-[12px]">
                      {sentence.trim()}
                    </span>
                  </motion.div>
                ))}
            </div>
          ) : (
            "No information available."
          )}
        </motion.div>
      </motion.div>
    ))
  ) : (
    <motion.div
      className="w-full text-center text-gray-500"
      variants={fadeIn}
    >
      No plans available for this product.
    </motion.div>
  )}
</motion.div>
        </motion.div>

      ): null}


      {/* {showAbout && (
         <div className="mt-32">
         <AboutPage1/>
         </div>
        )} */}

    </div>
    </div>
  );
};

export default ProductDetails;
