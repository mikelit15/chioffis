import Hero from '@/components/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us - Cioffi's Italian Restaurant",
  description: "Visit Cioffi's at 762 Mountain Ave, Springfield, NJ 07081 or call (973) 467-5468. Order online for pickup and delivery of authentic Italian cuisine.",
};

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Contact Us"
        subtitle="We'd Love to Hear From You"
        backgroundImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000"
        height="medium"
      />

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
                Get in Touch
              </h2>
              <div className="w-24 h-1 bg-red-700 mb-8"></div>
              <p className="text-xl text-gray-700 mb-8">
                Visit us in Springfield or reach out with any questions about our menu, 
                catering services, or special events.
              </p>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Location */}
                <div className="flex gap-4 items-start p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-700">762 Mountain Ave</p>
                    <p className="text-gray-700">Springfield, NJ 07081</p>
                    <a
                      href="https://maps.google.com/?q=762+Mountain+Ave+Springfield+NJ+07081"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-700 hover:text-red-800 font-medium mt-2 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-start p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                    <a
                      href="tel:9734675468"
                      className="text-gray-700 hover:text-red-700 text-lg font-medium"
                    >
                      (973) 467-5468
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Call us for reservations or inquiries</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 items-start p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Hours</h3>
                    <p className="text-gray-700">Please call for current hours</p>
                    <p className="text-gray-600 text-sm mt-1">Hours may vary on holidays</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl overflow-hidden h-[500px] lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.0234567890123!2d-74.3234567!3d40.6987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQxJzU1LjYiTiA3NMKwMTknMjQuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cioffi's Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-serif">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Order Online */}
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Order Online</h3>
              <p className="text-gray-600 mb-6">
                Browse our menu and place your order for pickup or delivery
              </p>
              <Link
                href="/order"
                className="inline-block bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Order Now
              </Link>
            </div>

            {/* Catering */}
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Catering Inquiry</h3>
              <p className="text-gray-600 mb-6">
                Plan your event with our exceptional catering services
              </p>
              <a
                href="tel:9734675468"
                className="inline-block bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Call Us
              </a>
            </div>

            {/* Visit Us */}
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Our Restaurant</h3>
              <p className="text-gray-600 mb-6">
                Experience authentic Italian dining in Springfield
              </p>
              <a
                href="https://maps.google.com/?q=762+Mountain+Ave+Springfield+NJ+07081"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-red-700 to-red-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            We Look Forward to Serving You
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Experience the Cioffi family tradition of authentic Italian cuisine
          </p>
          <a
            href="https://www.cioffis.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-red-700 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Order Online Now
          </a>
        </div>
      </section>
    </>
  );
}

