import React, { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import product1 from "../../assets/design-tool.png";
import product2 from "../../assets/operation.png";
import product3 from "../../assets/portfolio.png";
import product4 from "../../assets/social-media.png";
import product5 from "../../assets/writing_2327400 1.png";
import product6 from "../../assets/operation.png";


const badgeStyles = {
  "Best Seller": "bg-amber-100 text-amber-700",
  "Popular": "bg-purple-100 text-purple-700",
  "New": "bg-green-100 text-green-700",
};

const productImages = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6
];

const AvailableProducts = ({products,selectedProduct, setSelectedProduct}) => {
    const [isSelected , setIsSelected] = useState(null);

    const handleProduct = (product , ind) =>{
        setIsSelected(product.name)
        toast(`${product.name} is added`);
        const productWithImage = {
    ...product,
    image: productImages[ind]
  }

  setSelectedProduct([...selectedProduct, productWithImage])
}
        
    
    
  return (
    <div>
     <div className='grid grid-cols-3 gap-8' >
    {
        products.map((product , ind) => {
           
         return (
         <div 
          key={product.name}
          className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 relative">
        <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${badgeStyles[product.badge]}`}>
          {product.badge}
        </span>
        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-lg mb-4">
          <img
          className="w-full h-full object-contain"
        src={productImages[ind]}
        alt={product.name}
      />
        </div>
        <h3 className="text-base font-bold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-4">
         {product.description}
        </p>
        <div className="mb-4">
          <span className="text-2xl font-extrabold text-gray-900">${product.price}</span>
          <span className="text-sm text-gray-500">/{product.billingType}</span>
        </div>
         <ul className="space-y-2 mb-5">
            {product.features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-600">
                <span className="text-green-500 mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        <button 
         onClick={() => handleProduct(product , ind )}
        className={`w-full text-white text-sm font-semibold py-2.5 rounded-full ${
         isSelected === product.name
      ? 'bg-green-400'
      : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]'
  }`}>
          {isSelected === product.name ? 'Added' : 'Buy Now'}
        </button>
      </div>);
        })
    } 


      
    </div>
    </div>
    

  )
}

export default AvailableProducts






   