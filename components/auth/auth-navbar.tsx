import Link from 'next/link';
import React from 'react'

function AuthNavbar() {
  return (
    //   <div className="mb-6 text-center w-full">
    //     <h1 className="text-xl font-bold">CREATE AN ACCOUNT</h1>
    //     <p className="text-muted-foreground">
    //       Already have an account?
    //       <a href="#" className="pl-1 text-blue-600 text-sm hover:underline">
    //         Sign In
    //       </a>
    //     </p>
    //   </div>

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