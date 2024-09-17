import type { APIRoute } from 'astro'

export const GET: APIRoute = async ({ params, request }) => {
  const searchParams_ = new URL(request.url).searchParams

  return new Response(
    JSON.stringify({}),
    { status: 200, headers: { 'Content-Type': 'application/json' } },
  )
}
