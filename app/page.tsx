import React, { Suspense } from 'react'
import { StreamContent } from './StreamContent'

// Disable caching to ensure streaming works in production
export const dynamic = 'force-dynamic'
export const revalidate = 0

async function* generateText() {
  const messages = ['Streaming started...', 'Chunk 1', 'Chunk 2', 'Done!']
  for (let i = 0; i < messages.length; i++) {
    const message = messages[i]
    yield <div key={i}>{message}</div>
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }
}

export default async function Home() {
  const stream = generateText()
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StreamContent stream={stream} />
    </Suspense>
  )
}
