import React from "react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0F1121] px-4 pt-14 pb-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
       
        <div className="md:col-span-1">
          <h2 className="text-white text-2xl font-bold">DigiTools</h2>
          <p className="text-gray-400 text-sm mt-4 leading-relaxed">
            Premium digital tools for creators, professionals, and
            businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">Social Links</h3>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-gray-800 hover:opacity-80"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-gray-800 hover:opacity-80"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-gray-800 hover:opacity-80"
            >
              <FaXTwitter size={16} />
            </a>
          </div>
        </div>
      </div>

      
      <div className="max-w-5xl mx-auto border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm">
          © 2026 Digitools. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;