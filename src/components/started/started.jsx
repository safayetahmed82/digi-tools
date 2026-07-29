import React from "react";
import userIcon from "../../assets/user.png";
import packageIcon from "../../assets/package.png";
import rocketIcon from "../../assets/rocket.png";

const Started = () => {
  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="max-w-5xl  mx-auto px-20  grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="relative bg-white rounded-xl shadow-sm p-8 text-center">
          <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#6D28D9] text-white text-xs font-bold flex items-center justify-center">
            01
          </div>
          <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-4">
            <img src={userIcon} alt="Create Account" className="w-7 h-7" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Create Account</h3>
          <p className="text-sm text-gray-500">
            Sign up for free in seconds. No credit card required to get
            started.
          </p>
        </div>

       
        <div className="relative bg-white rounded-xl shadow-sm p-8 text-center">
          <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#6D28D9] text-white text-xs font-bold flex items-center justify-center">
            02
          </div>
          <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-4">
            <img src={packageIcon} alt="Choose Products" className="w-7 h-7" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Choose Products</h3>
          <p className="text-sm text-gray-500">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

       
        <div className="relative bg-white rounded-xl shadow-sm p-8 text-center">
          <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#6D28D9] text-white text-xs font-bold flex items-center justify-center">
            03
          </div>
          <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-4">
            <img src={rocketIcon} alt="Start Creating" className="w-7 h-7" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Start Creating</h3>
          <p className="text-sm text-gray-500">
            Download and start using your premium tools immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Started;