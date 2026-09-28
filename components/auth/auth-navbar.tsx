import Link from 'next/link';
import React from 'react'

function AuthNavbar() {
  return (
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
  )
}

export default AuthNavbar;