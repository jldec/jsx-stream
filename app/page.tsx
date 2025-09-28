import { GitHub } from './GitHub'
import { getStream } from './getStream'
import { StreamContent } from './StreamContent'
import { StreamButton } from './StreamButton'

// Disable caching to ensure streaming works in production
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function Home() {
  return (
    <div className="mx-auto max-w-3xl p-2">
      <title>next-jsx-stream</title>
      <h1 className="text-2xl font-bold">next-jsx-stream</h1>
      <GitHub />
      <StreamContent stream={await getStream()} />
      <StreamButton />
    </div>
  )
}
