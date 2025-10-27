import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  FaChartLine, 
  FaCode, 
  FaBrain, 
  FaShieldAlt, 
  FaSearch,
  FaBullhorn,
  FaPalette,
  FaMobile,
  FaRobot,
  FaCogs,
  FaLock,
  FaUserShield
} from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Services | Arin Digital Innovations',
  description: 'Comprehensive AI and digital marketing services including digital marketing, website development, AI consulting, and information security. Based in Austin, TX.',
}

export default function Services() {
  const services = [
    {
      id: 'digital-marketing',
      icon: <FaChartLine className="w-16 h-16 text-adi-blue" />,
      title: 'Digital Marketing',
      description: 'Drive growth with data-driven marketing strategies that deliver measurable results.',
      features: [
        {
          icon: <FaSearch className="w-6 h-6 text-adi-blue" />,
          title: 'SEO Optimization',
          description: 'Improve your search rankings and organic traffic with proven SEO strategies.',
        },
        {
          icon: <FaBullhorn className="w-6 h-6 text-adi-blue" />,
          title: 'Content Marketing',
          description: 'Engage your audience with compelling content that converts visitors into customers.',
        },
        {
          icon: <FaChartLine className="w-6 h-6 text-adi-blue" />,
          title: 'Social Media Strategy',
          description: 'Build and engage your community across all major social platforms.',
        },
        {
          icon: <FaBullhorn className="w-6 h-6 text-adi-blue" />,
          title: 'Pay-Per-Click Advertising',
          description: 'Maximize ROI with targeted PPC campaigns on Google, Facebook, and LinkedIn.',
        },
      ],
    },
    {
      id: 'web-development',
      icon: <FaCode className="w-16 h-16 text-adi-blue" />,
      title: 'Website Development',
      description: 'Custom websites built with modern technologies, optimized for performance and conversions.',
      features: [
        {
          icon: <FaPalette className="w-6 h-6 text-adi-blue" />,
          title: 'Custom Design',
          description: 'Beautiful, brand-aligned designs that capture attention and drive engagement.',
        },
        {
          icon: <FaMobile className="w-6 h-6 text-adi-blue" />,
          title: 'Responsive Development',
          description: 'Mobile-first websites that look perfect on every device and screen size.',
        },
        {
          icon: <FaSearch className="w-6 h-6 text-adi-blue" />,
          title: 'SEO-Ready Architecture',
          description: 'Built-in SEO best practices to ensure your site ranks well from day one.',
        },
        {
          icon: <FaCogs className="w-6 h-6 text-adi-blue" />,
          title: 'CMS Integration',
          description: 'Easy-to-use content management systems so you can update your site anytime.',
        },
      ],
    },
    {
      id: 'ai-consulting',
      icon: <FaBrain className="w-16 h-16 text-adi-blue" />,
      title: 'AI Consulting',
      description: 'Leverage artificial intelligence responsibly to maximize efficiency and drive innovation.',
      features: [
        {
          icon: <FaRobot className="w-6 h-6 text-adi-blue" />,
          title: 'AI Strategy Development',
          description: 'Identify the right AI tools and strategies for your specific business needs.',
        },
        {
          icon: <FaCogs className="w-6 h-6 text-adi-blue" />,
          title: 'Tool Implementation',
          description: 'Seamless integration of AI tools into your existing workflows and systems.',
        },
        {
          icon: <FaChartLine className="w-6 h-6 text-adi-blue" />,
          title: 'Process Automation',
          description: 'Automate repetitive tasks to free up your team for high-value work.',
        },
        {
          icon: <FaUserShield className="w-6 h-6 text-adi-blue" />,
          title: 'Ethical AI Guidance',
          description: 'Ensure your AI implementation aligns with ethical standards and best practices.',
        },
      ],
    },
    {
      id: 'security',
      icon: <FaShieldAlt className="w-16 h-16 text-adi-blue" />,
      title: 'Information Security',
      description: 'Protect your digital assets with comprehensive security consulting and implementation.',
      features: [
        {
          icon: <FaLock className="w-6 h-6 text-adi-blue" />,
          title: 'Security Assessments',
          description: 'Comprehensive audits to identify vulnerabilities and security gaps.',
        },
        {
          icon: <FaShieldAlt className="w-6 h-6 text-adi-blue" />,
          title: 'Compliance Guidance',
          description: 'Navigate GDPR, CCPA, HIPAA, and other regulatory requirements.',
        },
        {
          icon: <FaUserShield className="w-6 h-6 text-adi-blue" />,
          title: 'Security Training',
          description: 'Educate your team on security best practices and threat awareness.',
        },
        {
          icon: <FaCogs className="w-6 h-6 text-adi-blue" />,
          title: 'Security Implementation',
          description: 'Deploy robust security measures to protect your data and systems.',
        },
      ],
    },
  ]

  const benefits = [
    'Free initial consultation to assess your needs',
    'Custom solutions tailored to your business',
    'Transparent pricing with no hidden fees',
    'Ongoing support and optimization',
    'Regular reporting and analytics',
    'Dedicated account management',
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            alt="Data Analytics and Insights"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-adi-navy/75 via-adi-dark-blue/70 to-adi-blue/65"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Comprehensive Digital Solutions
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            From strategy to execution, we provide end-to-end services that drive real business results. Explore how we can help your business thrive.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="mb-6">{service.icon}</div>
                <h2 className="text-4xl font-bold text-adi-navy mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link href="/contact" className="btn-primary inline-block">
                  Get Started
                </Link>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="card">
                      <div className="mb-4">{feature.icon}</div>
                      <h3 className="text-lg font-bold text-adi-navy mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">Why Work With Us?</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                When you partner with Arin Digital Innovations, you get more than just services—you get a dedicated team committed to your success.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-adi-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card gradient-bg text-white">
              <h3 className="text-3xl font-bold mb-4">Our Process</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-adi-sky font-semibold mb-2">Step 1</div>
                  <h4 className="text-xl font-semibold mb-2">Consultation</h4>
                  <p className="text-gray-200">
                    We discuss your goals, challenges, and vision in a free consultation.
                  </p>
                </div>
                <div>
                  <div className="text-adi-sky font-semibold mb-2">Step 2</div>
                  <h4 className="text-xl font-semibold mb-2">Strategy</h4>
                  <p className="text-gray-200">
                    We develop a customized plan tailored to your specific needs.
                  </p>
                </div>
                <div>
                  <div className="text-adi-sky font-semibold mb-2">Step 3</div>
                  <h4 className="text-xl font-semibold mb-2">Execution</h4>
                  <p className="text-gray-200">
                    Our team implements the solution with precision and care.
                  </p>
                </div>
                <div>
                  <div className="text-adi-sky font-semibold mb-2">Step 4</div>
                  <h4 className="text-xl font-semibold mb-2">Optimization</h4>
                  <p className="text-gray-200">
                    We continuously monitor and improve to maximize results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-bg text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's discuss how our services can help you achieve your business goals. Schedule a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Schedule Consultation
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

