// app/(auth)/layout.tsx
import React from 'react'
import Link from 'next/link'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-muted/30">
      {/*  Header text */}
      <header className="w-full border-b border-gray shadow p-4">
        <Link href="/" className="inline-flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 font-bold text-white shadow-sm">
            E
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Shopyn
          </span>
        </Link>
      </header>
      <div className="w-full flex flex-1 items-center justify-center p-4">
      {/* Centered form container */}

      
      <div className="w-full max-w-md bg-card p-6 border rounded-xl shadow-sm">
        {children}
      </div>
      </div>
    </main>
  )
}