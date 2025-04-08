const Product = require("../models/product");

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get single product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getProductByName = async (req, res) => {
  try {
      const { productName } = req.params; 
      if (!productName) {
          return res.status(400).json({ message: 'Product name is required' });
      }

      const product = await Product.findOne({ name: productName });

      if (!product) {
          return res.status(404).json({ message: 'Product not found' });
      }

      res.status(200).json(product);
  } catch (error) {
      console.error('Error fetching product:', error); 
      res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Create 
exports.createProduct = async (req, res) => {
  const {
    productName,
    productLink,
    description,
    why_choose_des,
    who_need_des,
    category,
    benefits,
    customerTestimonials,
    plans,
  } = req.body;

  const imageUrl = req.files["imageUrl"]?.map((file) => file.path) || [];
  const gallery = req.files["gallery"]?.map((file) => file.path) || [];

  try {
    const newProduct = new Product({
      productName: productName,
      productLink:  productLink,
      description: description,
      why_choose_des: why_choose_des,
      who_need_des: who_need_des,
      category: category,
      imageUrl: imageUrl,
      gallery: gallery,
      benefits: benefits ? JSON.parse(benefits) : [],
      customerTestimonials: customerTestimonials
        ? JSON.parse(customerTestimonials)
        : [],
      plans: plans ? JSON.parse(plans) : [],
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
};

// Update
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const imageUrl = req.files["imageUrl"]?.map((file) => file.path) || product.imageUrl;
    const gallery = req.files["gallery"]?.map((file) => file.path) || product.gallery;

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        productName: req.body.productName,
        productLink: req.body. productLink,
        description: req.body.description,
        why_choose_des: req.body.why_choose_des,
        who_need_des: req.body.who_need_des,
        category: req.body.category,
        imageUrl: imageUrl,
        gallery: gallery,
        benefits: req.body.benefits ? JSON.parse(req.body.benefits) : [],
        customerTestimonials: req.body.customerTestimonials
          ? JSON.parse(req.body.customerTestimonials)
          : [],
        plans: req.body.plans ? JSON.parse(req.body.plans) : [],
      },
      { new: true }
    );

    res.status(200).json(updatedProduct);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
};

//delete
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
