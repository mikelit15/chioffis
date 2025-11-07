import Hero from '@/components/Hero';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Cioffi's"
        subtitle="Authentic Italian Cuisine Since 1958"
        backgroundImage="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.cioffis.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Order Online
          </a>
          <Link
            href="/contact"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </Hero>

      {/* Welcome Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Welcome to Cioffi&apos;s
          </h2>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            For over 65 years, Cioffi&apos;s has been serving the finest authentic Italian cuisine
            in New Jersey. Our family tradition of quality ingredients, time-honored recipes,
            and passionate service continues to delight generations of customers.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="text-center group">
              <div className="bg-red-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Since 1958</h3>
              <p className="text-gray-600">
                Three generations of the Cioffi family bringing authentic Italian flavors to New Jersey.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center group">
              <div className="bg-red-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Ingredients</h3>
              <p className="text-gray-600">
                We use only the finest, freshest ingredients to create our traditional Italian dishes.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center group">
              <div className="bg-red-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Catering Services</h3>
              <p className="text-gray-600">
                Let us make your special event unforgettable with our exceptional catering services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-red-700 to-red-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Experience the Tradition
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Visit us in Springfield or order online for pickup and delivery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.cioffis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-700 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Order Now
            </a>
            <Link
              href="/our-story"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
