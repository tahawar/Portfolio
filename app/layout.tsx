import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-tahawar-ihsan.netlify.app'),
  title: {
    default: 'Tahawar Ihsan — AI/ML Engineer | LLMs, LangGraph, RAG, FastAPI',
    template: '%s · Tahawar Ihsan',
  },
  description:
    'AI/ML Engineer building production GenAI systems with LangGraph, LLMs, RAG, FastAPI, and AWS. 2+ years shipping agentic AI for enterprise clients including BMW and Mercedes.',
  keywords: [
    'AI Engineer',
    'Machine Learning Engineer',
    'LLM Engineer',
    'Generative AI',
    'LangChain',
    'LangGraph',
    'LiteLLM',
    'MCP',
    'RAG',
    'Retrieval-Augmented Generation',
    'Agentic AI',
    'Vector Search',
    'Pinecone',
    'FastAPI',
    'Python',
    'AWS',
    'MLOps',
    'Tahawar Ihsan',
    'Lahore AI Engineer',
    'Pakistan AI Engineer',
  ],
  authors: [{ name: 'Tahawar Ihsan', url: 'https://portfolio-tahawar-ihsan.netlify.app' }],
  creator: 'Tahawar Ihsan',
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-tahawar-ihsan.netlify.app/',
    title: 'Tahawar Ihsan — AI/ML Engineer | LLMs, LangGraph, RAG, FastAPI',
    description:
      'AI/ML Engineer building production GenAI systems with LangGraph, LLMs, RAG, FastAPI, and AWS. Shipping agentic AI for enterprise clients including BMW and Mercedes.',
    siteName: 'Tahawar Ihsan Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tahawar Ihsan — AI/ML Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tahawarihsan',
    creator: '@tahawarihsan',
    title: 'Tahawar Ihsan — AI/ML Engineer',
    description:
      'Building production GenAI systems with LangGraph, LLMs, RAG, FastAPI, and AWS. 2+ years shipping agentic AI for enterprise clients.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tahawar Ihsan',
  url: 'https://portfolio-tahawar-ihsan.netlify.app/',
  image: 'https://portfolio-tahawar-ihsan.netlify.app/og-image.png',
  jobTitle: 'AI/ML Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'NetSol Technologies Ltd.',
    url: 'https://netsoltech.com',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'National University of Computer and Emerging Sciences (FAST-NUCES)',
    url: 'https://www.nu.edu.pk/',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lahore',
    addressRegion: 'Punjab',
    addressCountry: 'Pakistan',
  },
  email: 'mailto:tahawarihsan@gmail.com',
  telephone: '+92-306-6206308',
  sameAs: [
    'https://www.linkedin.com/in/tahawar-ihsan',
    'https://github.com/tahawar',
    'https://x.com/tahawarihsan',
    'https://medium.com/@tahawarihsan',
  ],
  knowsAbout: [
    'Large Language Models',
    'Generative AI',
    'LangChain',
    'LangGraph',
    'LiteLLM',
    'Model Context Protocol',
    'Retrieval-Augmented Generation',
    'Agentic AI',
    'Vector Databases',
    'Pinecone',
    'MongoDB Atlas Vector Search',
    'FastAPI',
    'Python',
    'AWS',
    'AWS Bedrock',
    'Docker',
    'MLOps',
    'Machine Learning',
    'Deep Learning',
    'Natural Language Processing',
  ],
  description:
    'AI/ML Engineer building production GenAI systems with LangGraph, LLMs, RAG, FastAPI, and AWS for enterprise clients including BMW and Mercedes.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <meta name="theme-color" content="#0a0a0b" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="grain antialiased">{children}</body>
    </html>
  );
}
