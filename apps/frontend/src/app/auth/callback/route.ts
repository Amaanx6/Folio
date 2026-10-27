import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const errorCode = searchParams.get('error_code')
  const errorDescription = searchParams.get('error_description')
  
  // 1. SECURITY: Prevent Open Redirect
  const next = searchParams.get('next') ?? '/dashboard'
  const isValidNext = next.startsWith('/') && !next.startsWith('//')
  const redirectPath = isValidNext ? next : '/dashboard'

  // 2. Handle Supabase Errors
  if (errorCode) {
    const errorUrl = new URL('/auth/auth-code-error', origin)
    errorUrl.searchParams.set('error', errorDescription || 'Authentication failed')
    return NextResponse.redirect(errorUrl.toString())
  }

  // 3. Exchange Code for Session
  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      return NextResponse.redirect(`${origin}${redirectPath}`)
    }
  }

  return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}