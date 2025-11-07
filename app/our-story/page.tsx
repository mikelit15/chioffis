import Hero from '@/components/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Story - Cioffi's Italian Restaurant",
  description: "Learn about the Cioffi family's journey from Italy to America in 1958, and how three generations have kept the tradition of authentic Italian cuisine alive in New Jersey.",
};

export default function OurStory() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our Story"
        subtitle="A Family Tradition Since 1958"
        backgroundImage="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000"
        height="medium"
      />

      {/* Story Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              The Cioffi Legacy
            </h2>
            <div className="w-24 h-1 bg-red-700 mb-8"></div>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                In 1958, Antonio Cioffi arrived in America along with his newlywed bride Santina. 
                He came here with only twenty dollars in his pocket and the promise of the American dream.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                His hard work and a dedication to a passion for good Italian food has enabled him to 
                make that dream a reality. Inheriting his business sense from his Father Gennaro, 
                has enabled him to make Cioffi&apos;s the success it is today.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-12 mb-16">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-red-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1958</span>
                </div>
              </div>
              <div className="flex-1 pt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">The Beginning</h3>
                <p className="text-gray-700 leading-relaxed">
                  Antonio and Santina Cioffi begin their journey in America, bringing with them 
                  authentic Italian recipes and a dream of sharing their culinary heritage.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-red-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Newark</span>
                </div>
              </div>
              <div className="flex-1 pt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Pacific Street, Newark</h3>
                <p className="text-gray-700 leading-relaxed">
                  The first Cioffi&apos;s location opens on Pacific Street in Newark, 
                  quickly becoming a beloved neighborhood destination for authentic Italian cuisine.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-red-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Union</span>
                </div>
              </div>
              <div className="flex-1 pt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Stuyvesant Avenue, Union</h3>
                <p className="text-gray-700 leading-relaxed">
                  Expanding to meet growing demand, Cioffi&apos;s opens a second location on 
                  Stuyvesant Avenue in Union, continuing to serve quality Italian food to New Jersey families.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-red-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Today</span>
                </div>
              </div>
              <div className="flex-1 pt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Springfield</h3>
                <p className="text-gray-700 leading-relaxed">
                  Now located in Springfield, Cioffi&apos;s continues the family tradition. 
                  The legacy lives on through Antonio&apos;s sons Gennaro and Giuseppe, 
                  who maintain the same commitment to quality and authentic Italian cuisine.
                </p>
              </div>
            </div>
          </div>

          {/* Family Values */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-red-700 mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Family</h3>
                <p className="text-gray-600">
                  Three generations dedicated to serving our community like family
                </p>
              </div>
              <div className="text-center">
                <div className="text-red-700 mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quality</h3>
                <p className="text-gray-600">
                  Only the finest ingredients in every dish we prepare
                </p>
              </div>
              <div className="text-center">
                <div className="text-red-700 mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tradition</h3>
                <p className="text-gray-600">
                  Authentic recipes passed down through generations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-red-700 to-red-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Become Part of Our Story
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Experience over 65 years of Italian culinary tradition
          </p>
          <Link
            href="/order"
            className="inline-block bg-white text-red-700 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Order Online
          </Link>
        </div>
      </section>
    </>
  );
}

