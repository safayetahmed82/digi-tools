import React from 'react'
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
   

     <div className=" max-w-7xl mx-auto px-20 navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
   
    <a className="btn btn-ghost text-3xl font-extrabold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</a>
  </div>
  <div className="navbar-center  lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end ">
  <div className='flex items-center gap-2'>
    <a className='flex items-center gap-2'><IoCartOutline /> Login</a>
    <a className="btn rounded-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-4 py-2 ">Get Started</a>
    </div>
  </div>
</div>

    
  )
}

export default Navbar