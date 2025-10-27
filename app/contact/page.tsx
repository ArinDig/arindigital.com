import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Contact Us | Arin Digital Innovations',
  description: 'Get in touch with Arin Digital Innovations. Schedule a free consultation to discuss your digital marketing, AI consulting, and web development needs.',
}

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="w-8 h-8 text-adi-blue" />,
      title: 'Location',
      content: 'Austin, TX',
      description: 'Proudly serving Austin and beyond',
    },
    {
      icon: <FaEnvelope className="w-8 h-8 text-adi-blue" />,
      title: 'Email',
      content: 'contact@arindigital.com',
      description: 'We typically respond within 24 hours',
      link: 'mailto:contact@arindigital.com',
    },
    {
      icon: <FaLinkedin className="w-8 h-8 text-adi-blue" />,
      title: 'LinkedIn',
      content: 'Connect with us',
      description: 'Follow us for industry insights',
      link: 'https://linkedin.com',
    },
  ]

  const reasons = [
    'Free initial consultation with no obligations',
    'Quick response time—usually within 24 hours',
    'Custom solutions tailored to your needs',
    'Transparent pricing and clear timelines',
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2532&auto=format&fit=crop"
            alt="AI Technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-adi-navy/75 via-adi-dark-blue/70 to-adi-blue/65"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Start a Conversation
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            Ready to transform your business with AI and digital marketing? We'd love to hear from you. Reach out today for a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="text-lg font-bold text-adi-navy mb-2">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-adi-blue hover:text-adi-dark-blue font-semibold mb-1 block transition-colors"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-adi-blue font-semibold mb-1">{info.content}</p>
                )}
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Info */}
            <div>
              <h2 className="section-heading">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Whether you're looking to enhance your digital presence, implement AI solutions, or strengthen your information security, we're here to help. Fill out the form and we'll get back to you shortly.
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-adi-navy mb-4">
                  Why Choose Us?
                </h3>
                <ul className="space-y-3">
                  {reasons.map((reason, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-adi-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <span className="text-gray-700">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card gradient-bg text-white">
                <h3 className="text-2xl font-bold mb-4">What to Expect</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-adi-light-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Initial Response</p>
                      <p className="text-gray-200 text-sm">
                        We'll reach out within 24 hours to schedule a call.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-adi-light-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Discovery Call</p>
                      <p className="text-gray-200 text-sm">
                        We'll discuss your goals, challenges, and vision.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-adi-light-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Custom Proposal</p>
                      <p className="text-gray-200 text-sm">
                        Receive a tailored strategy and pricing proposal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="card">
              <h3 className="text-2xl font-bold text-adi-navy mb-6">
                Send Us a Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-xl font-bold text-adi-navy mb-2">
                How much do your services cost?
              </h3>
              <p className="text-gray-700">
                Every project is unique, so we provide custom pricing based on your specific needs, scope, and timeline. We offer a free consultation to discuss your requirements and provide a transparent proposal.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-adi-navy mb-2">
                How long does a typical project take?
              </h3>
              <p className="text-gray-700">
                Project timelines vary depending on complexity. A basic website might take 4-6 weeks, while comprehensive digital marketing campaigns are ongoing. We'll provide a detailed timeline during our consultation.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-adi-navy mb-2">
                Do you work with businesses outside of Austin?
              </h3>
              <p className="text-gray-700">
                Absolutely! While we're based in Austin, TX, we work with clients across the United States and internationally. We're equipped to collaborate remotely and deliver exceptional results regardless of location.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-adi-navy mb-2">
                What makes your AI consulting different?
              </h3>
              <p className="text-gray-700">
                We focus on responsible AI implementation that aligns with your business values and goals. We don't just recommend tools—we help you understand how to use them effectively and ethically to drive real business value.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

