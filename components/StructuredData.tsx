export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Arin Digital Innovations, LLC',
    url: 'https://arindigital.com',
    logo: 'https://arindigital.com/logo-transparent.png',
    description: 'Austin-based AI and digital marketing consultancy specializing in website development, digital marketing, AI consulting, and information security.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Austin',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@arindigital.com',
      contactType: 'Customer Service',
    },
    sameAs: [
      'https://linkedin.com/company/arindigital',
      'https://twitter.com/arindigital',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    knowsAbout: [
      'Digital Marketing',
      'Web Development',
      'Artificial Intelligence',
      'Information Security',
      'SEO',
      'AI Consulting',
    ],
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Arin Digital Innovations',
    image: 'https://arindigital.com/logo-transparent.png',
    '@id': 'https://arindigital.com',
    url: 'https://arindigital.com',
    telephone: '',
    email: 'contact@arindigital.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '',
      addressLocality: 'Austin',
      addressRegion: 'TX',
      postalCode: '',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.2672,
      longitude: -97.7431,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
      opens: '09:00',
      closes: '17:00',
    },
    priceRange: '$$',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  )
}

