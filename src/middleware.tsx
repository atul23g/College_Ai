import { NextRequest, NextResponse } from "next/server";

// Check if Clerk environment variables are available
const hasClerkConfig = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && 
                      process.env.CLERK_SECRET_KEY;

export default async function middleware(req: NextRequest) {
  // If Clerk is not configured, allow all requests during build
  if (!hasClerkConfig) {
    return NextResponse.next();
  }

  // For runtime, we'll handle authentication in the components
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};