import Link from 'next/link'

export default function NotFound() {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen w-full justify-center items-center gap-12 bg-background text-foreground">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-semibold mb-4">Not Found</h2>
          <p className="text-base font-normal mb-8">
            Could not find requested resource
          </p>
          <Link 
            href="/dashboard"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Return Home
          </Link>
        </div>
      </body>
    </html>
  )
} 