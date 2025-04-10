import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../layouts/Header";

const apiUrl = import.meta.env.VITE_API_URL;

const ProductEdit = () => {
  const { id } = useParams();

  const [productData, setProductData] = useState({
    productName: "",
    productLink: "",
    description: "",
    why_choose_des: "",
    who_need_des: "",
    category: "",
    benefits: [],
    customerTestimonials: [],
    plans: [],
  });

  const [imageFiles, setImageFiles] = useState([]);
  const [galleryFiles, setGalleryFiles] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [previewGallery, setPreviewGallery] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/product/${id}`);
        const data = res.data;

        setProductData({
          ...data,
          benefits: data.benefits || [],
          customerTestimonials: data.customerTestimonials || [],
          plans: data.plans || [],
        });

        if (data.imageUrl) {
          setPreviewImages([data.imageUrl]);
        }
        if (data.gallery) {
          setPreviewGallery(data.gallery);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e, type) => {
    const files = Array.from(e.target.files);
    if (type === "imageUrl") {
      setImageFiles(files);
      setPreviewImages(files.map((file) => URL.createObjectURL(file)));
    } else if (type === "gallery") {
      setGalleryFiles(files);
      setPreviewGallery(files.map((file) => URL.createObjectURL(file)));
    }
  };

  const addField = (type) => {
    const newField = type === "plans" ? { name: "", price: "", features: "" } : { title: "", description: "" };
    setProductData({
      ...productData,
      [type]: [...productData[type], newField],
    });
  };

  const handleFieldChange = (e, index, type, field) => {
    const updatedFields = [...productData[type]];
    updatedFields[index][field] = e.target.value;
    setProductData({ ...productData, [type]: updatedFields });
  };

  const removeField = (index, type) => {
    const updatedFields = [...productData[type]];
    updatedFields.splice(index, 1);
    setProductData({ ...productData, [type]: updatedFields });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    imageFiles.forEach((file) => formData.append("imageUrl", file));
    galleryFiles.forEach((file) => formData.append("gallery", file));

    Object.keys(productData).forEach((key) => {
      if (Array.isArray(productData[key])) {
        formData.append(key, JSON.stringify(productData[key]));
      } else {
        formData.append(key, productData[key]);
      }
    });

    try {
      const res = await axios.put(`${apiUrl}/api/product/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Product updated successfully!");
      console.log(res.data);

      window.location.href = "/dashboard";

    } catch (err) {
      console.error(err);
      alert("Error updating product. Please Try Later");
    }
  };

  return (
    <div>
      <Header/>
      <div className="max-w-3xl mx-auto p-6 border border-gray-200 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Edit Product</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
     <div>
     <label  className="block mb-2">Product Name :</label>
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={productData.productName}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
     </div>
    <div>
    <label  className="block mb-2">Product Link :</label>
        <input
          type="text"
          name="productLink"
          placeholder="Product Link"
          value={productData.productLink}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
    </div>
       <div>
       <label  className="block mb-2">Product Description :</label>
       <textarea
          name="description"
          placeholder="Product Description"
          value={productData.description}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
       </div>

      <div>
      <label className="block mb-2">Why Choose This? :</label>
      <textarea
          name="why_choose_des"
          placeholder="Why Choose This?"
          value={productData.why_choose_des}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>


            {/* Benefits */}
            <h3 className="text-[16px] mt-4">Benefits</h3>
        {productData.benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col gap-3 px-2 mb-2">
            <div>
            <label className="block mb-2">Title :</label>
            <input
              type="text"
              placeholder="Title"
              value={benefit.title}
              onChange={(e) => handleFieldChange(e, index, "benefits", "title")}
              className="w-full p-2 border border-gray-300 rounded"
            />
            </div>

           <div>
           <label className="block mb-2">Description :</label>
           <input
              type="text"
              placeholder="Description"
              value={benefit.description}
              onChange={(e) => handleFieldChange(e, index, "benefits", "description")}
              className="w-full p-2 border border-gray-300 rounded"
            />
           </div>
            <button
              type="button"
              onClick={() => removeField(index, "benefits")}
              className="text-red-500 text-start"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addField("benefits")}
          className="bg-black hover:bg-blue-400 text-white px-2 py-1 rounded text-[14px]"
        >
          Add Benefit
        </button>

      <div>
      <label className="block mb-2">Who Needs This? :</label>
      <textarea
          name="who_need_des"
          placeholder="Who Needs This?"
          value={productData.who_need_des}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

       <div>
       <label className="block mb-2">Category :</label>
       <input
          type="text"
          name="category"
          placeholder="Category"
          value={productData.category}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
       </div>

        <div>
          <label className="block mb-2">Main Images:</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => handleImageChange(e, "imageUrl")}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <div className="flex space-x-2 mt-2">
            {previewImages.map((img, index) => (
              <img key={index} src={img} alt={`preview-${index}`} className="w-16 h-16 rounded" />
            ))}
          </div>
        </div>

        <div>
          <label className="block mb-2">Product Images:</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => handleImageChange(e, "gallery")}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <div className="flex space-x-2 mt-2">
            {previewGallery.map((img, index) => (
              <img key={index} src={img} alt={`gallery-${index}`} className="w-16 h-16 rounded" />
            ))}
          </div>
        </div>
 
        {/* customerTestimonials */}
        <h3 className="text-[16px] mt-4">Customer Testimonials</h3>
        {productData.customerTestimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col gap-3 px-2 mb-2">
            <div>
            <label className="block mb-2">Client Name :</label>
            <input
              type="text"
              placeholder="Client Name"
              value={testimonial.clientName}
              onChange={(e) =>
                handleFieldChange(e, index, "customerTestimonials", "clientName")
              }
              className="w-full p-2 border border-gray-300 rounded"
            />
            </div>
            <div>
            <label className="block mb-2">Company Name :</label>
            <input
              type="text"
              placeholder="Company Name"
              value={testimonial.companyName}
              onChange={(e) =>
                handleFieldChange(e, index, "customerTestimonials", "companyName")
              }
              className="w-full p-2 border border-gray-300 rounded"
            />
            </div>
           <div>
           <label className="block mb-2">Description :</label>
           <textarea
              placeholder="Description"
              value={testimonial.description}
              onChange={(e) =>
                handleFieldChange(e, index, "customerTestimonials", "description")
              }
              className="w-full p-2 border border-gray-300 rounded"
            />
           </div>
            <button
              type="button"
              onClick={() => removeField(index, "customerTestimonials")}
              className="text-red-500 text-start"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addField("customerTestimonials")}
          className="bg-black hover:bg-blue-400 text-white px-2 py-1 rounded text-[14px]"
        >
          Add Testimonial
        </button>

      {/* Plans */}
        <h3 className="text-[16px] mt-4">Plans</h3>
        {productData.plans.map((plan, index) => (
          <div key={index} className="flex flex-col gap-3 px-2 mb-2">
            <div>
              <label className="block mb-2">Plan Name</label>
            <input
              type="text"
              placeholder="Plan Name"
              value={plan.name}
              onChange={(e) => handleFieldChange(e, index, "plans", "name")}
              className="w-full p-2 border border-gray-300 rounded"
            />
            </div>
           <div>
           <label className="block mb-2">Plan Price</label>
           <input
              type="text"
              placeholder="Price"
              value={plan.price}
              onChange={(e) => handleFieldChange(e, index, "plans", "price")}
              className="w-full p-2 border border-gray-300 rounded"
            />
           </div>
           <div>
           <label className="block mb-2">Features</label>
           <input
              type="text"
              placeholder="Features"
              value={plan.features}
              onChange={(e) => handleFieldChange(e, index, "plans", "features")}
              className="w-full p-2 border border-gray-300 rounded"
            />
           </div>
            <button
              type="button"
              onClick={() => removeField(index, "plans")}
              className="text-red-500 text-start"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addField("plans")}
          className="bg-black hover:bg-blue-400 text-white px-2 py-1 rounded text-[14px]"
        >
          Add Plan
        </button>


        <div className="flex justify-between space-x-4 mt-4">
          
        <button
          type="submit"
          className="w-1/2 bg-black text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Update Product
        </button>
  <button
    type="button"
    onClick={() => window.location.href = "/dashboard"}
    className="w-1/2 bg-gray-400 text-white px-4 py-2 rounded hover:bg-red-600 text-[14px]"
  >
    Cancel
  </button>
</div>

      </form>
    </div>
    </div>
  );
};

export default ProductEdit;
