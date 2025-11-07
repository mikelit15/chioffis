import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-red-500 mb-4">Cioffi&apos;s</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Serving authentic Italian cuisine in New Jersey since 1958. 
              A family tradition of quality and passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-red-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="text-gray-400 hover:text-red-500 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/order" className="text-gray-400 hover:text-red-500 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/catering" className="text-gray-400 hover:text-red-500 transition-colors">
                  Catering
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-red-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>762 Mountain Ave</p>
              <p>Springfield, NJ 07081</p>
              <p className="pt-2">
                <a href="tel:9734675468" className="hover:text-red-500 transition-colors">
                  (973) 467-5468
                </a>
              </p>
              <a
                href="https://www.cioffis.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-full font-medium transition-all duration-300"
              >
                Order Online
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Cioffi&apos;s. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

