import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  schemaType?: 'LocalBusiness' | 'Pharmacy' | 'FAQPage' | 'BreadcrumbList';
  faqData?: Array<{ question: string; answer: string }>;
  breadcrumbsData?: Array<{ name: string; url: string }>;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Dinesh Medical Hall | Genuine Medicines & Healthcare in Jehanabad',
  description = 'Dinesh Medical Hall - Your trusted pharmacy at Hospital Mor, Jehanabad, Bihar 804408. 100% genuine medicines, surgical supplies, baby care, health devices & 24/7 WhatsApp prescription order.',
  keywords = 'Dinesh Medical Hall, Pharmacy in Jehanabad, Medical store Hospital Mor Jehanabad, Genuine medicines Jehanabad, Sadar Hospital medical shop, Buy medicines WhatsApp 7903430774, Medicine store Bihar 804408',
  canonicalUrl = 'https://dinesh-dedical.vercel.app',
  ogImage = 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80',
  faqData,
  breadcrumbsData
}) => {
  useEffect(() => {
    // Dynamic page title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (nameAttr: string, valueAttr: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${valueAttr}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, valueAttr);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:image', ogImage);
    updateMetaTag('property', 'og:type', 'website');
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', ogImage);

    // Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // Schema JSON-LD Injection
    const schemaId = 'dinesh-medical-schema';
    let scriptTag = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const localPharmacySchema = {
      '@context': 'https://schema.org',
      '@type': 'Pharmacy',
      'name': 'Dinesh Medical Hall',
      'image': ogImage,
      '@id': 'https://dinesh-dedical.vercel.app/#pharmacy',
      'url': 'https://dinesh-dedical.vercel.app',
      'telephone': '+91-7903430774',
      'priceRange': '₹',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Hospital Mor',
        'addressLocality': 'Jehanabad',
        'addressRegion': 'Bihar',
        'postalCode': '804408',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 25.2133,
        'longitude': 84.9872
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          'opens': '07:30',
          'closes': '22:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Sunday'],
          'opens': '08:00',
          'closes': '21:30'
        }
      ],
      'sameAs': [
        'https://wa.me/917903430774'
      ]
    };

    let fullSchema: any = localPharmacySchema;

    if (faqData && faqData.length > 0) {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqData.map(f => ({
          '@type': 'Question',
          'name': f.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': f.answer
          }
        }))
      };
      fullSchema = [localPharmacySchema, faqSchema];
    }

    if (breadcrumbsData && breadcrumbsData.length > 0) {
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbsData.map((item, index) => ({
          '@type': 'ListItem',
          'position': index + 1,
          'name': item.name,
          'item': item.url
        }))
      };
      fullSchema = Array.isArray(fullSchema) ? [...fullSchema, breadcrumbSchema] : [fullSchema, breadcrumbSchema];
    }

    scriptTag.text = JSON.stringify(fullSchema);

  }, [title, description, keywords, canonicalUrl, ogImage, faqData, breadcrumbsData]);

  return null;
};
