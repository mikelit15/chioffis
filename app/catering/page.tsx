import Hero from '@/components/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Catering Services - Cioffi's Italian Restaurant",
  description: "Professional Italian catering for weddings, corporate events, and private parties in New Jersey. Over 65 years of experience serving authentic Italian cuisine.",
};

export default function Catering() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Catering Services"
        subtitle="Make Your Event Unforgettable"
        backgroundImage="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2000"
        height="medium"
      />

      {/* Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
            Authentic Italian Catering
          </h2>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 leading-relaxed">
            Let Cioffi&apos;s bring the authentic taste of Italy to your special event. 
            With over 65 years of experience, we provide exceptional catering services 
            for weddings, corporate events, parties, and gatherings of all sizes.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-serif">
            Our Catering Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-red-700 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Weddings</h3>
              <p className="text-gray-600">
                Make your special day perfect with our elegant Italian wedding catering, 
                featuring customizable menus and professional service.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-red-700 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Corporate Events</h3>
              <p className="text-gray-600">
                Impress your clients and colleagues with professional catering for 
                business meetings, conferences, and corporate celebrations.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-red-700 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Private Parties</h3>
              <p className="text-gray-600">
                Celebrate birthdays, anniversaries, and family gatherings with 
                delicious Italian food that everyone will love.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-red-700 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Social Events</h3>
              <p className="text-gray-600">
                From graduations to holiday parties, we provide catering for all 
                your social occasions with authentic Italian flair.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-red-700 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Home Delivery</h3>
              <p className="text-gray-600">
                Enjoy restaurant-quality Italian food in the comfort of your home 
                with our convenient delivery catering service.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-red-700 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Custom Menus</h3>
              <p className="text-gray-600">
                Work with our team to create a personalized menu that perfectly 
                fits your event and dietary requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-serif">
            Why Choose Cioffi&apos;s Catering?
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-red-700 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">65+ Years of Experience</h3>
                <p className="text-gray-600">Three generations of expertise in authentic Italian cuisine</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-red-700 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fresh, Quality Ingredients</h3>
                <p className="text-gray-600">We use only the finest ingredients in every dish</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-red-700 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Service</h3>
                <p className="text-gray-600">Reliable, courteous staff dedicated to your event&apos;s success</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-red-700 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Options</h3>
                <p className="text-gray-600">Customizable menus to accommodate all dietary needs and preferences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-red-700 to-red-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Plan Your Event Today
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Contact us to discuss your catering needs and create a memorable experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9734675468"
              className="inline-block bg-white text-red-700 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Call (973) 467-5468
            </a>
            <a
              href="https://www.cioffis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Order Online
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

