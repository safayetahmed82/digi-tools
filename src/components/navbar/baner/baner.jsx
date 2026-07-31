import React from 'react'
import bannerImg from "../../../assets/banner.png";

const Baner = () => {
  return (
    <section className="max-w-7xl mx-auto px-15">
      <div className="container mx-auto px-6 py-10">
        <div className="flex min-h-75 items-center justify-between gap-10 flex flex-col md:flex-row items-center">

         
          <div className="max-w-xl">

            
            <div className="mb-4">
              <span className="badge border-none bg-[#EDE9FE] px-4 py-3 text-xs text-[#4F39F6]"> <span className="h-2 w-2 rounded-full bg-[#4F39F6]"></span>
                New: AI-Powered Tools Available
              </span>
            </div>

            
            <h1 className="text-4xl font-extrabold leading-tight text-[#293347] md:text-5xl">
              Supercharge Your
              <br />
              Digital Workflow
            </h1>

            
            <p className="mt-3 max-w-lg text-sm leading-6 text-gray-500">
              Access premium AI tools, design assets, templates, and productivity
              software — all in one place. Start creating faster today.
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Explore Products
            </p>

            
            <div className="mt-4 flex gap-3">
              <button className="btn border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:opacity-90">
                Explore Products
              </button>

              <button className="btn btn-outline border-[#9514FA] text-[#9514FA] hover:bg-[#9514FA] hover:text-white">
                ▶ Watch Demo
              </button>
            </div>

          </div>

          
          <div className=" md:block">
            <img
              src={bannerImg}
              alt="Digital Workflow"
              className="h-75 w-75 rounded-lg object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Baner