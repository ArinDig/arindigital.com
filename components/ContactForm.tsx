'use client'

import { useState, FormEvent } from 'react'
import { FaPaperPlane } from 'react-icons/fa'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      // Using Formspree to handle form submissions
      // Sign up at formspree.io and replace YOUR_FORM_ID with your actual form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          _subject: `New Contact Form Submission from ${formData.name}`,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: '',
        })
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-adi-blue focus:border-transparent transition-all"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-adi-blue focus:border-transparent transition-all"
          placeholder="john@company.com"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
          Company Name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-adi-blue focus:border-transparent transition-all"
          placeholder="Your Company"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
          Service Interested In *
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-adi-blue focus:border-transparent transition-all"
        >
          <option value="">Select a service</option>
          <option value="digital-marketing">Digital Marketing</option>
          <option value="web-development">Website Development</option>
          <option value="ai-consulting">AI Consulting</option>
          <option value="information-security">Information Security</option>
          <option value="multiple">Multiple Services</option>
          <option value="not-sure">Not Sure / General Inquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-adi-blue focus:border-transparent transition-all resize-none"
          placeholder="Tell us about your project and goals..."
        />
      </div>

      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          Thank you for your message! We'll get back to you within 24 hours.
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          There was an error submitting your message. Please try again or email us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
        <FaPaperPlane />
      </button>

      <p className="text-sm text-gray-600 text-center">
        By submitting this form, you agree to our{' '}
        <a href="/privacy" className="text-adi-blue hover:underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  )
}

