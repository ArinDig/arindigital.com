import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Arin Digital Innovations',
  description: 'Privacy Policy for Arin Digital Innovations, LLC. Learn how we collect, use, and protect your personal information.',
}

export default function Privacy() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg text-white pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-200">
            Last Updated: October 26, 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-adi-navy mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Arin Digital Innovations, LLC ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website arindigital.com and use our services.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-adi-navy mb-4">Information We Collect</h2>
              
              <h3 className="text-2xl font-semibold text-adi-dark-blue mb-3 mt-6">Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Fill out contact forms on our website</li>
                <li>Subscribe to our newsletter or communications</li>
                <li>Request information about our services</li>
                <li>Engage with us on social media</li>
                <li>Enter into a contract for our services</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                This information may include: name, email address, company name, phone number, and any other information you choose to provide.
              </p>

              <h3 className="text-2xl font-semibold text-adi-dark-blue mb-3 mt-6">Automatically Collected Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain information about your device and browsing actions, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Device identifiers</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-adi-navy mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Responding to your inquiries and providing customer support</li>
                <li>Delivering services you've requested</li>
                <li>Sending marketing communications (with your consent)</li>
                <li>Improving our website and services</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Preventing fraud and ensuring security</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-adi-navy mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and conducting our business (e.g., hosting providers, email services)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to respond to legal process</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you've given us explicit permission to share your information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-adi-navy mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data that are sent to your browser and stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-adi-navy mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-adi-navy mb-4">Your Rights and Choices</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Opt-Out:</strong> Opt out of marketing communications at any time</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise these rights, please contact us at contact@arindigital.com.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-adi-navy mb-4">Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to read the privacy policies of any third-party sites you visit.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-adi-navy mb-4">Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-adi-navy mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-adi-navy mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 font-semibold mb-2">Arin Digital Innovations, LLC</p>
                <p className="text-gray-700">Austin, TX</p>
                <p className="text-gray-700">Email: contact@arindigital.com</p>
              </div>
            </div>

            <div className="border-t pt-6 mt-8">
              <p className="text-gray-600 text-sm">
                By using our website and services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

