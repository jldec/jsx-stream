import React from 'react'
import { GitHub } from './GitHub'
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
    <div className="mx-auto max-w-3xl p-2">
      <title>next-jsx-stream</title>
      <h1 className="text-2xl font-bold">next-jsx-stream</h1>
      <GitHub />
      <StreamContent stream={stream} />
    </div>
  )
}
