import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { githubUrl, linkedinUrl } from '@/lib/profile'
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

const siteUrl = 'https://iamsusantasahoo.github.io'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Susanta Kumar Sahoo | AI/ML Engineer',
    template: '%s | Susanta Kumar Sahoo',
  },
  description:
    'AI/ML Engineer specializing in LLMs, RAG pipelines, and full-stack development. Building intelligent systems with Python, LangChain, and cloud technologies.',
  keywords: [
    'Susanta Kumar Sahoo',
    'AI Engineer',
    'ML Engineer',
    'Machine Learning',
    'LLM',
    'RAG',
    'LangChain',
    'Python',
    'Full-Stack Developer',
    'Portfolio',
  ],
  authors: [{ name: 'Susanta Kumar Sahoo', url: siteUrl }],
  creator: 'Susanta Kumar Sahoo',
  applicationName: 'Susanta Kumar Sahoo — Portfolio',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Susanta Kumar Sahoo | AI/ML Engineer',
    description:
      'AI/ML Engineer specializing in LLMs, RAG pipelines, and full-stack development. Building intelligent systems with Python, LangChain, and cloud technologies.',
    siteName: 'Susanta Kumar Sahoo — Portfolio',
    locale: 'en_US',
    // OG image is auto-injected from app/opengraph-image.tsx
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Susanta Kumar Sahoo | AI/ML Engineer',
    description:
      'AI/ML Engineer specializing in LLMs, RAG pipelines, and full-stack development.',
    // Twitter image is auto-injected from app/opengraph-image.tsx
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.webmanifest',
  verification: {
    google: '_CZoGd-TXcpTj3j1uW42PlFXxixx7CoTSj2L1XzNqQk',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0d0f14',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Susanta Kumar Sahoo',
    url: siteUrl,
    jobTitle: 'AI/ML Engineer',
    description:
      'AI/ML Engineer specializing in LLMs, RAG pipelines, and full-stack development.',
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Large Language Models',
      'RAG',
      'LangChain',
      'Python',
      'Full-Stack Development',
    ],
    sameAs: [githubUrl, linkedinUrl],
  }

  return (
    <html lang="en">
      <body className={`${_inter.variable} ${_jetbrains.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  )
}
