# nextjs jsx-stream

React Server Components (RSC) can generate streams of JSX components. This extends the more common pattern of atomically returning a single server-rendered component, by returning multiple components as separate chunks of a [readable stream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream).

This implementation performs streaming once during the initial page load, resulting in chunks arriving as part of the main document HTML. It also makes the stream available as a `getStream()` server function, which can be fetched on demand from the client.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

For the RedwoodSDK version see [rwsdk-jsx-stream](https://github.com/jldec/rwsdk-jsx-stream).

### Deployed
https://jsx-stream-iota.vercel.app/

### Dev
- clone
- pnpm install
- pnpm dev

### Context
https://x.com/benapatton/status/1971619183831244990

> Alright, I know someone has an example of an @nextjs
> app that fetches an api endpoint in an server component and the streams that to the client.
>
> - I have a python fast api
> - I want to fetch it in a server component
> - I don't want to use the useChat hook

### Credits
- [grok research](https://grok.com/share/bGVnYWN5_aebcae7b-807d-4690-a9fa-35a3e59b2642)
- [cursor fixes](cursor_fixes.md)

