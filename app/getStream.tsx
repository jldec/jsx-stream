'use server'
import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', 7)

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function* generateText() {
  const messages = ['Streaming started...', 'Chunk 1', 'Chunk 2', 'Chunk 3', 'Chunk 4', 'Done!']
  for (let i = 0; i < messages.length; i++) {
    const id = nanoid()
    yield <div key={id} className="text-sm font-mono">{`${id} ${messages[i]}`}</div>
    await sleep(250)
  }
}

export async function getStream() {
  return generateText()
}
