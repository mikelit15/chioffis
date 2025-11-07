import Hero from '@/components/Hero';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Order Online - Cioffi's Italian Restaurant",
  description: "Order authentic Italian food online from Cioffi's. Browse our menu of pizzas, pastas, entrees, and more. Pickup and delivery available in Springfield, NJ.",
};

export default function Order() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Order Online"
        subtitle="Authentic Italian Food Delivered to Your Door"
        backgroundImage="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2000"
        height="medium"
      />

      {/* Order Options */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              How Would You Like to Order?
            </h2>
            <div className="w-24 h-1 bg-red-700 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700">
              Choose your preferred ordering method
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Online Ordering */}
            <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-red-100">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Order Online</h3>
                <p className="text-gray-600 mb-6">
                  Browse our full menu and place your order online for pickup or delivery
                </p>
                <a
                  href="https://www.cioffis.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Order Now
                </a>
              </div>
            </div>

            {/* Phone Order */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200">
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Call to Order</h3>
                <p className="text-gray-600 mb-6">
                  Speak with our friendly staff to place your order over the phone
                </p>
                <a
                  href="tel:9734675468"
                  className="inline-block bg-gray-700 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  (973) 467-5468
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              Popular Menu Items
            </h2>
            <div className="w-24 h-1 bg-red-700 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pizza */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Pizza</h3>
                <p className="text-gray-600 mb-4">
                  Hand-tossed pizzas with fresh mozzarella and our signature sauce
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-red-700 font-semibold">From $12.99</span>
                </div>
              </div>
            </div>

            {/* Pasta */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Pasta</h3>
                <p className="text-gray-600 mb-4">
                  Traditional Italian pasta dishes made with authentic recipes
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-red-700 font-semibold">From $14.99</span>
                </div>
              </div>
            </div>

            {/* Entrees */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Entrees</h3>
                <p className="text-gray-600 mb-4">
                  Classic Italian entrees including chicken, veal, and seafood
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-red-700 font-semibold">From $16.99</span>
                </div>
              </div>
            </div>

            {/* Appetizers */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Appetizers</h3>
                <p className="text-gray-600 mb-4">
                  Start your meal with our delicious Italian appetizers
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-red-700 font-semibold">From $8.99</span>
                </div>
              </div>
            </div>

            {/* Salads */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Salads</h3>
                <p className="text-gray-600 mb-4">
                  Fresh salads with homemade dressings and quality ingredients
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-red-700 font-semibold">From $9.99</span>
                </div>
              </div>
            </div>

            {/* Desserts */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Desserts</h3>
                <p className="text-gray-600 mb-4">
                  Finish your meal with authentic Italian desserts
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-red-700 font-semibold">From $6.99</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.cioffis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              View Full Menu & Order
            </a>
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-serif">
            Ordering Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Pickup
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Ready in 20-30 minutes</li>
                <li>• No minimum order</li>
                <li>• Call ahead for faster service</li>
                <li>• Curbside pickup available</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
                Delivery
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Delivery in 45-60 minutes</li>
                <li>• $15 minimum order</li>
                <li>• Delivery fee may apply</li>
                <li>• Limited delivery area</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-red-700 to-red-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Ready to Order?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Experience authentic Italian cuisine from the comfort of your home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.cioffis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-red-700 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Order Online Now
            </a>
            <a
              href="tel:9734675468"
              className="inline-block bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Call (973) 467-5468
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

