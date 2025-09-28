'use server'
import { nanoid } from "nanoid"

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function time(): string {
  return new Date().toISOString().slice(11, 23)
}

async function* generateText() {
  const messages = ['Streaming started...', 'Chunk 1', 'Chunk 2', 'Chunk 3', 'Done!']
  for (let i = 0; i < messages.length; i++) {
    yield <div key={nanoid()}>{`${time()} ${messages[i]}`}</div>
    await sleep(500)
  }
}

export async function getStream() {
  return await generateText()
}
