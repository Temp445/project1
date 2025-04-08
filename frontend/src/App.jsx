import { BrowserRouter,Routes,Route } from "react-router-dom"
import AboutPage from "./components/pages/AboutPage"
import HomePage from "./components/pages/HomePage"
import Header from "./components/layouts/Header"
import ProductsPage from "./components/pages/ProductsPage"
import Footer from "./components/layouts/Footer"
import ContactUs from "./components/pages/ContactUs"
import ProductEnquire from "./components/pages/ProductEnquire"
import ProductDetails from "./components/pages/ProductDetails"
import Dashboard from "./components/admin/Dashboard"
import ProductUpload from "./components/admin/ProductUpload"
import ProductEdit from "./components/admin/ProductEdit"
import BackToTop from "./components/layouts/BackToTop"

function App() {


  return (
    <>
    <BrowserRouter>
    
    <Routes>
     <Route path="/" element={<HomePage/>} />
     <Route path="/about" element={<AboutPage/>} />
     <Route path="/products" element={<ProductsPage/>} />
     <Route path="/product/:id" element={<ProductDetails />} />
     <Route path="/contact" element={<ContactUs/>} />
     <Route path="/ProductEnquire" element={<ProductEnquire/>} />
     <Route path="/dashboard" element={<Dashboard/>} />
     <Route path ="/product/upload" element={<ProductUpload/>} />
     <Route path ="/product/edit/:id" element={<ProductEdit/>} />
    </Routes>
    <BackToTop/>
    <Footer/>
    </BrowserRouter>

    
    </>
  )
}

export default App
