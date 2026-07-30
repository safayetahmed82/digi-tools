import React, { use, useState } from 'react'
import AvailableProducts from '../availableProducts/availableProducts'
import Cart from '../cart/cart'

const Products = ({productsPromise}) => {
    const products = use(productsPromise);

    const [selectedType, setSelectedType] =useState('available')
    const [selectedProduct, setSelectedProduct] = useState([]);
  return (
    <div className='max-w-7xl mx-auto px-20'>
      <div className="w-full bg-gray-50  text-center py-16 px-4">
        <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
          Premium Digital Tools
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          Choose from our curated collection of premium digital products designed<br></br> boost your productivity and creativity.
        </p>
      </div>
      <div className=' inline-flex items-center bg-white border border-gray-300 rounded-full p-1.25'>
        <button 
        onClick={()=>setSelectedType('available')}
        className={` ${selectedType==='available' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : ''} px-4 btn rounded-2xl py-2`}>Products</button>
        <button
        onClick={()=>setSelectedType('cart')}
             className={` ${selectedType==='cart' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : ''} btn rounded-2xl  px-4 py-2 `}>Cart({selectedProduct.length})
        </button>
         
      </div>

    </div>  
    {selectedType==='available' ? (<AvailableProducts products={products} setSelectedProduct={setSelectedProduct} selectedProduct ={selectedProduct}></AvailableProducts>) : (<Cart selectedProduct ={selectedProduct} setSelectedProduct={setSelectedProduct}></Cart>)}
    </div>
  )
}

export default Products