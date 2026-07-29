import React from 'react'

const Rating = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] ">
      <div className="stats stats-horizontal bg-transparent w-full divide-x divide-white/20">
        <div className="stat place-items-center py-8">
          <div className="stat-value text-white text-3xl md:text-4xl font-extrabold">
            50K+
          </div>
          <div className="stat-desc text-white/80 text-sm md:text-base mt-1">
            Active Users
          </div>
        </div>

        <div className="stat place-items-center py-8">
          <div className="stat-value text-white text-3xl md:text-4xl font-extrabold">
            200+
          </div>
          <div className="stat-desc text-white/80 text-sm md:text-base mt-1">
            Premium Tools
          </div>
        </div>

        <div className="stat place-items-center py-8">
          <div className="stat-value text-white text-3xl md:text-4xl font-extrabold">
            4.9
          </div>
          <div className="stat-desc text-white/80 text-sm md:text-base mt-1">
            Rating
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rating