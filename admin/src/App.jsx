import { BrowserRouter,Routes,Route } from "react-router-dom"
import Footer from "./components/layouts/Footer"
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
     <Route path="/" element={<Dashboard/>} />
     <Route path="/product/:id" element={<ProductDetails />} />
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
