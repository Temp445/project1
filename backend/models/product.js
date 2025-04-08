const mongoose = require("mongoose");

// Benefit Schema
const benefitSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// Customer Testimonial Schema
const customerTestimonialSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// Plan Schema
const planSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  features: {
    type: String,
    required: true,
  },
  
});

// Product Schema
const productSchema = new mongoose.Schema({
  imageUrl: {
    type: [String],
    required: true,
  },
  gallery: {
    type: [String],
    default: [],
  },
  productName: {
    type: String,
    required: true,
    trim: true,
  },
  productLink: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  why_choose_des: {
    type: String,
    required: false,
  },
  who_need_des: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
  benefits: [benefitSchema], 
  customerTestimonials: [customerTestimonialSchema], 
  plans: [planSchema],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
