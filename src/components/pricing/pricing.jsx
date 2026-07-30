import React from "react";

const Pricing = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 text-sm mt-3">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Starter */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col h-full">
          <h3 className="text-lg font-bold text-gray-900">Starter</h3>
          <p className="text-sm text-gray-500 mt-1">Perfect for getting started</p>

          <div className="mt-6 mb-6">
            <span className="text-4xl font-extrabold text-gray-900">$0</span>
            <span className="text-gray-500 text-sm">/Month</span>
          </div>

          <ul className="space-y-3 flex-1">
            <li className="flex items-start text-sm text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              Access to 10 free tools
            </li>
            <li className="flex items-start text-sm text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              Basic templates
            </li>
            <li className="flex items-start text-sm text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              Community support
            </li>
            <li className="flex items-start text-sm text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              1 project per month
            </li>
          </ul>

          <button className="mt-8 w-full bg-[#4F39F6] hover:bg-[#4230d6] text-white font-semibold py-3 rounded-full transition">
            Get Started Free
          </button>
        </div>

        {/* Pro */}
        <div className="relative bg-gradient-to-b from-[#4F39F6] to-[#9514FA] rounded-2xl p-8 flex flex-col h-full shadow-lg">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </span>

          <h3 className="text-lg font-bold text-white">Pro</h3>
          <p className="text-sm text-white/80 mt-1">Best for professionals</p>

          <div className="mt-6 mb-6">
            <span className="text-4xl font-extrabold text-white">$29</span>
            <span className="text-white/80 text-sm">/Month</span>
          </div>

          <ul className="space-y-3 flex-1">
            <li className="flex items-start text-sm text-white/90">
              <span className="text-green-300 mr-2">✓</span>
              Access to all premium tools
            </li>
            <li className="flex items-start text-sm text-white/90">
              <span className="text-green-300 mr-2">✓</span>
              Unlimited templates
            </li>
            <li className="flex items-start text-sm text-white/90">
              <span className="text-green-300 mr-2">✓</span>
              Priority support
            </li>
            <li className="flex items-start text-sm text-white/90">
              <span className="text-green-300 mr-2">✓</span>
              Unlimited projects
            </li>
            <li className="flex items-start text-sm text-white/90">
              <span className="text-green-300 mr-2">✓</span>
              Cloud sync
            </li>
            <li className="flex items-start text-sm text-white/90">
              <span className="text-green-300 mr-2">✓</span>
              Advanced analytics
            </li>
          </ul>

          <button className="mt-8 w-full bg-white hover:bg-gray-100 text-[#6D28D9] font-semibold py-3 rounded-full transition">
            Start Pro Trial
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col h-full">
          <h3 className="text-lg font-bold text-gray-900">Enterprise</h3>
          <p className="text-sm text-gray-500 mt-1">For teams and businesses</p>

          <div className="mt-6 mb-6">
            <span className="text-4xl font-extrabold text-gray-900">$99</span>
            <span className="text-gray-500 text-sm">/Month</span>
          </div>

          <ul className="space-y-3 flex-1">
            <li className="flex items-start text-sm text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              Everything in Pro
            </li>
            <li className="flex items-start text-sm text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              Team collaboration
            </li>
            <li className="flex items-start text-sm text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              Custom integrations
            </li>
            <li className="flex items-start text-sm text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              Dedicated support
            </li>
            <li className="flex items-start text-sm text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              SLA guarantee
            </li>
            <li className="flex items-start text-sm text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              Custom branding
            </li>
          </ul>

          <button className="mt-8 w-full bg-[#4F39F6] hover:bg-[#4230d6] text-white font-semibold py-3 rounded-full transition">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;