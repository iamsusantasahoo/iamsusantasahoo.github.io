import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'

export const alt = 'Susanta Kumar Sahoo — AI/ML Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0d0f14 0%, #131826 100%)',
          color: '#f2f4f8',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 34, color: '#2dd4bf', letterSpacing: 2 }}>
          AI / ML ENGINEER
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, marginTop: 24, lineHeight: 1.05 }}>
          Susanta Kumar Sahoo
        </div>
        <div style={{ fontSize: 34, color: '#9aa4b2', marginTop: 28, maxWidth: 900 }}>
          LLMs · RAG pipelines · Full-stack development with Python & LangChain
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 26,
            color: '#2dd4bf',
          }}
        >
          iamsusantasahoo.github.io
        </div>
      </div>
    ),
    { ...size }
  )
}
