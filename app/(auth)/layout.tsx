// app/(auth)/layout.tsx
import React from 'react'
import Link from 'next/link'
import AuthNavbar from '@/components/auth/auth-navbar'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen w-full flex flex-col items-center">
      {/*  Header */}
      <AuthNavbar/>
      <div className='w-full flex flex-1  justify-center items-center'>
        {/* Form card */}
        {children}
      </div>
    </main>
  )
}