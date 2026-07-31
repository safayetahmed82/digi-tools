import React from 'react'
import { toast } from 'react-toastify';

const Cart = ({selectedProduct , setSelectedProduct}) => {

    const total = selectedProduct.reduce(( sum, product) => sum + product.price ,0)
    
    const handleDeleteProduct = (product)=> {

      toast(`${product.name} is Removed`);
         const filteredProduct = selectedProduct.filter((deletedProduct) => deletedProduct.name !== product.name 
        );
        setSelectedProduct(filteredProduct);
      
    }
    const handleCheckout =()=>{
      setSelectedProduct([])
      toast(`You have Successfully Added`);
    }
  return (
     <div className="border border-base-300 rounded-xl p-5 shadow-sm">

      
      <h2 className="text-lg font-semibold mb-5">
        Your Cart
      </h2>
      

      
      <div className="space-y-2">

          {
            selectedProduct.length === 0 && (
             <p className="text-center text-gray-500 py-10">
                 Your cart is empty 🛒
              </p>
             )
          }

        {
          selectedProduct.map((product, ind) => {
            return (
              <div
                key={ind}
                className="flex items-center justify-between bg-base-200 rounded-xl p-3"
              >

              
                <div className="flex items-center gap-3">

                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img
                        src={product.image}
                        alt={product.name}
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium">
                      {product.name}
                    </h3>

                    <p className="text-xs text-base-content/60">
                      ${product.price}
                    </p>
                  </div>

                </div>

                
                <button className="btn btn-ghost btn-xs text-error" 
                onClick={()=>handleDeleteProduct(product)}>
                  Remove
                </button>

              </div>
            )
          })
        }

      </div>

      
      <div className="flex justify-between items-center mt-5 mb-4">
        <span className="text-lg ">
          Total:
        </span>

        <span className="font-semibold">
          ${total}
        </span>
      </div>

     
      <button 
      onClick={handleCheckout}
      className="btn btn-primary w-full rounded-full">
        Proceed To Checkout
      </button>

    </div>
  )
}

export default Cart