import "./App.css";
import { Suspense, useState } from "react";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from "./components/navbar/navbar";
import Baner from "./components/navbar/baner/baner";
import Rating from "./components/rating/rating";
import Started from "./components/started/started";
import Pricing from "./components/pricing/pricing";
import Footer from "./components/footer/footer";
import Products from "./components/products/products";

const fetchProducts = async () => {
  const res = await fetch(`${import.meta.env.BASE_URL}data.json`);
  return res.json();
};

function App() {
  const productsPromise = fetchProducts();
  const [selectedProduct, setSelectedProduct] = useState([]);

  return (
    <>
      <Navbar selectedProduct={selectedProduct}
         setSelectedProduct={setSelectedProduct}></Navbar>
      <Baner></Baner>
      <Rating></Rating>
      
      <Suspense
        fallback={<span className="loading loading-spinner loading-md"></span>}
      >
        <Products productsPromise={productsPromise} setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct}></Products>
      </Suspense>
      <Started></Started>
      <Pricing></Pricing>
      <Footer></Footer>
      <ToastContainer />

       
    </>
  );
}

export default App;
