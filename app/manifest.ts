import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Susanta Kumar Sahoo — AI/ML Engineer',
    short_name: 'Susanta Sahoo',
    description:
      'AI/ML Engineer specializing in LLMs, RAG pipelines, and full-stack development.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0d0f14',
    theme_color: '#0d0f14',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
