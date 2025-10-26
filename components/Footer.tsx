import Link from 'next/link'
import Image from 'next/image'
import { FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="gradient-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo-transparent.png"
                alt="Arin Digital Innovations"
                width={50}
                height={50}
                className="w-12 h-12"
              />
              <span className="text-xl font-bold">
                Arin Digital Innovations
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering businesses in Austin and beyond with cutting-edge AI solutions and digital marketing strategies. We help you leverage technology responsibly to achieve your mission.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-adi-light-blue" />
                <span className="text-gray-300">Austin, TX</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-adi-light-blue" />
                <a href="mailto:contact@arindigital.com" className="text-gray-300 hover:text-white transition-colors">
                  contact@arindigital.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#digital-marketing" className="text-gray-300 hover:text-white transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services#web-development" className="text-gray-300 hover:text-white transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services#ai-consulting" className="text-gray-300 hover:text-white transition-colors">
                  AI Consulting
                </Link>
              </li>
              <li>
                <Link href="/services#security" className="text-gray-300 hover:text-white transition-colors">
                  Information Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              &copy; {currentYear} Arin Digital Innovations, LLC. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/sitemap.xml" className="text-gray-300 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

