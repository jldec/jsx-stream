'use client'

import React, { useState } from 'react'
import { getStream } from './getStream'
import { StreamContent } from './StreamContent'

export function StreamButton() {
  const [stream, setStream] = useState<AsyncGenerator<React.JSX.Element> | null>(null)

 return (
    <div className="mt-4">
      <button
        onClick={async () => setStream(await getStream())}
        className="bg-blue-500 hover:bg-blue-700 active:translate-y-0.5 text-white font-bold py-2 px-4 rounded-md"
      >
        Get Stream
      </button>
      {stream && (
        <div className="mt-4">
          <StreamContent stream={stream} />
        </div>
      )}
    </div>
  )
}
