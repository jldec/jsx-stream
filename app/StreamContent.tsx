'use client'

import React, { useState, useEffect } from 'react'

export function StreamContent({ stream }: { stream: AsyncGenerator<React.JSX.Element> }) {
  const [content, setContent] = useState<React.JSX.Element[]>([])

  useEffect(() => {
    async function readStream() {
      for await (const chunk of stream) {
        setContent((prev) => [...prev, chunk])
      }
    }
    readStream()
  }, [stream])

  return <div>{content}</div>
}
