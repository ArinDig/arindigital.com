import Link from 'next/link'
import { FaRocket, FaBrain, FaShieldAlt, FaCode, FaChartLine, FaUsers } from 'react-icons/fa'

export default function Home() {
  const services = [
    {
      icon: <FaChartLine className="w-12 h-12 text-adi-blue" />,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns that drive results. SEO, content marketing, social media, and analytics to grow your online presence.',
    },
    {
      icon: <FaCode className="w-12 h-12 text-adi-blue" />,
      title: 'Website Development',
      description: 'Custom, responsive websites built with modern technologies. Fast, secure, and optimized for conversions and user experience.',
    },
    {
      icon: <FaBrain className="w-12 h-12 text-adi-blue" />,
      title: 'AI Consulting',
      description: 'Leverage artificial intelligence responsibly. We help you identify, implement, and optimize AI tools to maximize growth and efficiency.',
    },
    {
      icon: <FaShieldAlt className="w-12 h-12 text-adi-blue" />,
      title: 'Information Security',
      description: 'Protect your digital assets with comprehensive security consulting. Risk assessments, compliance guidance, and security implementation.',
    },
  ]

  const stats = [
    { number: '50+', label: 'Clients Served' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Years Experience' },
    { number: '100%', label: 'Dedicated Support' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg text-white pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Empowering Your Business with{' '}
                <span className="text-adi-sky">AI & Digital Excellence</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Austin-based digital consultancy specializing in helping businesses leverage the right AI tools responsibly to maximize growth and achieve their mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-center">
                  Get Started Today
                </Link>
                <Link href="/services" className="btn-secondary text-center">
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-adi-blue to-adi-light-blue rounded-lg blur-3xl opacity-30"></div>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-adi-light-blue rounded-full flex items-center justify-center">
                        <FaRocket className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Growth Focused</h3>
                        <p className="text-gray-200">Results-driven strategies</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-adi-light-blue rounded-full flex items-center justify-center">
                        <FaBrain className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">AI Expertise</h3>
                        <p className="text-gray-200">Responsible AI implementation</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-adi-light-blue rounded-full flex items-center justify-center">
                        <FaUsers className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Client Success</h3>
                        <p className="text-gray-200">Your mission is our priority</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-adi-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Core Services</h2>
            <p className="section-subheading max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs. From strategy to implementation, we're with you every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card hover:scale-105 transform">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-adi-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">Why Choose Arin Digital Innovations?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-adi-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-adi-navy mb-2">
                      Austin-Based Expertise
                    </h3>
                    <p className="text-gray-600">
                      Local knowledge with global capabilities. We understand the Texas market and bring best practices from across the industry.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-adi-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-adi-navy mb-2">
                      Responsible AI Implementation
                    </h3>
                    <p className="text-gray-600">
                      We help you leverage AI tools ethically and effectively, ensuring they align with your values and drive real business results.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-adi-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-adi-navy mb-2">
                      Comprehensive Solutions
                    </h3>
                    <p className="text-gray-600">
                      From strategy to execution, we provide end-to-end digital solutions that integrate seamlessly with your business operations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-adi-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-adi-navy mb-2">
                      Results-Driven Approach
                    </h3>
                    <p className="text-gray-600">
                      We focus on measurable outcomes that matter to your business. Every strategy is designed to maximize your ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-adi-navy to-adi-blue rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
              <p className="text-lg text-gray-200 mb-8">
                Let's discuss how we can help you leverage AI and digital marketing to achieve your business goals.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <FaRocket className="text-adi-sky" />
                  <span>Free initial consultation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaRocket className="text-adi-sky" />
                  <span>Custom strategy development</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaRocket className="text-adi-sky" />
                  <span>Ongoing support & optimization</span>
                </li>
              </ul>
              <Link href="/contact" className="btn-secondary w-full text-center block">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-bg text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Partner with Arin Digital Innovations to unlock your business's full potential through strategic digital solutions and responsible AI implementation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
            <Link href="/about" className="btn-secondary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

