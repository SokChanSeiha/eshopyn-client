// app/(auth)/layout.tsx
import React from 'react'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-muted/30">
      {/* Optional Brand / Header text */}
      {/* <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold">SIGN IN ACCOUNT</h1>
        <p className="text-muted-foreground">
          Not yet have an account? 
          <a href="/register" className="text-primary underline">Sign up</a>
        </p>
      </div> */}

      {/* Centered form container */}
      <div className="w-full max-w-md bg-card p-6 border rounded-xl shadow-sm">
        {children}
      </div>
    </main>
  )
}