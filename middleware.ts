import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Bots blocked at the server level. These ignore robots.txt and drive
// significant bot traffic / server load, so we reject them outright.
const BLOCKED_BOTS = [
  'AhrefsBot',
  'SemrushBot',
  'MJ12bot',
  'DotBot',
  'PetalBot',
  'serpstatbot',
  'BLEXBot',
  'DataForSeoBot',
]

export function middleware(request: NextRequest) {
  const ua = (request.headers.get('user-agent') || '').toLowerCase()
  const isBlockedBot = BLOCKED_BOTS.some((bot) => ua.includes(bot.toLowerCase()))

  if (isBlockedBot) {
    return new NextResponse(null, { status: 403 })
  }

  // Existing behaviour: expose the resolved pathname to downstream handlers.
  const response = NextResponse.next()
  response.headers.set('x-invoke-path', request.nextUrl.pathname)
  return response
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|.*\\..*).*)', '/'],
}
