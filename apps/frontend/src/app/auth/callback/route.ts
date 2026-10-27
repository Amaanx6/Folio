import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  
  // Handle Supabase auth errors (e.g., expired links)
  const errorCode = searchParams.get('error_code')
  const errorDescription = searchParams.get('error_description')
  
  const next = searchParams.get('next') ?? '/dashboard'

  // If Supabase sent an error, redirect to your error page
  if (errorCode) {
    const errorUrl = new URL('/auth/auth-code-error', origin)
    errorUrl.searchParams.set('error', errorDescription || 'Authentication failed')
    return NextResponse.redirect(errorUrl.toString())
  }

  if (code) {
    const supabase = await createClient()
    // Exchange the code for a real session
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  // If no code or exchange fails, send to error page
  return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}