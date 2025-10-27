import type { Metadata } from 'next'
import Link from 'next/link'
import { FaLightbulb, FaHeart, FaRocket, FaShieldAlt, FaUsers, FaChartLine } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'About Us | Arin Digital Innovations',
  description: 'Learn about Arin Digital Innovations, an Austin-based AI and digital marketing consultancy dedicated to helping businesses leverage technology responsibly to achieve their mission.',
}

export default function About() {
  const values = [
    {
      icon: <FaLightbulb className="w-8 h-8 text-adi-blue" />,
      title: 'Innovation',
      description: 'We stay at the forefront of digital trends and AI technologies to provide cutting-edge solutions.',
    },
    {
      icon: <FaHeart className="w-8 h-8 text-adi-blue" />,
      title: 'Integrity',
      description: 'We believe in transparent communication and ethical business practices in everything we do.',
    },
    {
      icon: <FaRocket className="w-8 h-8 text-adi-blue" />,
      title: 'Results',
      description: 'Your success is our success. We focus on delivering measurable outcomes that drive growth.',
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 text-adi-blue" />,
      title: 'Responsibility',
      description: 'We implement AI and technology solutions responsibly, with security and ethics at the core.',
    },
  ]

  const approach = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business, goals, challenges, and opportunities through in-depth consultation.',
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'We develop a customized strategy tailored to your specific needs, budget, and timeline.',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our team executes the plan with precision, keeping you informed every step of the way.',
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'We continuously monitor, analyze, and refine our approach to maximize your ROI.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=2071&auto=format&fit=crop"
            alt="Austin, Texas Skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-adi-navy/75 via-adi-dark-blue/70 to-adi-blue/65"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Arin Digital Innovations
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            We're an Austin-based digital consultancy on a mission to help businesses harness the power of AI and digital marketing to achieve extraordinary growth.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Arin Digital Innovations, we believe that every business deserves access to cutting-edge digital solutions. Our mission is to democratize AI and digital marketing by making these powerful tools accessible, understandable, and actionable for businesses of all sizes.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We specialize in helping businesses leverage the right AI tools responsibly to maximize their growth and achieve their mission. Whether you're just beginning your digital transformation or looking to optimize existing strategies, we're here to guide you every step of the way.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Based in Austin, Texas, we combine local market expertise with global best practices to deliver solutions that drive real, measurable results.
              </p>
            </div>
            <div className="card gradient-bg text-white">
              <h3 className="text-3xl font-bold mb-6">What Sets Us Apart</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaUsers className="text-adi-sky flex-shrink-0 mt-1" />
                  <p className="text-gray-200">
                    <strong className="text-white">Client-Centric Approach:</strong> Your success is our priority. We tailor every solution to your unique needs.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaShieldAlt className="text-adi-sky flex-shrink-0 mt-1" />
                  <p className="text-gray-200">
                    <strong className="text-white">Ethical AI Implementation:</strong> We believe in using AI responsibly and transparently.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaChartLine className="text-adi-sky flex-shrink-0 mt-1" />
                  <p className="text-gray-200">
                    <strong className="text-white">Proven Results:</strong> Our strategies are backed by data and focused on ROI.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaRocket className="text-adi-sky flex-shrink-0 mt-1" />
                  <p className="text-gray-200">
                    <strong className="text-white">Continuous Innovation:</strong> We stay ahead of the curve so you can too.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Core Values</h2>
            <p className="section-subheading max-w-3xl mx-auto">
              These principles guide everything we do and inform every decision we make for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-adi-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Approach</h2>
            <p className="section-subheading max-w-3xl mx-auto">
              A proven methodology that ensures your success at every stage of your digital transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, index) => (
              <div key={index} className="relative">
                <div className="card">
                  <div className="text-5xl font-bold text-adi-light-blue opacity-20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-adi-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < approach.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-adi-light-blue"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Austin Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-heading">Proud to Call Austin Home</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Austin, Texas is more than just our location—it's a thriving hub of innovation, technology, and entrepreneurship. The city's dynamic business environment and forward-thinking culture inspire us to push boundaries and deliver exceptional results for our clients.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you're a local Austin business or operating anywhere in the world, we bring the same level of dedication, expertise, and innovative spirit to every project.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-bg text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's discuss how Arin Digital Innovations can help your business thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

