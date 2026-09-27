import React from 'react'

function AuthNavbar() {
  return (
      <div className="mb-6 text-center w-full">
        <h1 className="text-xl font-bold">CREATE AN ACCOUNT</h1>
        <p className="text-muted-foreground">
          Already have an account?
          <a href="#" className="pl-1 text-blue-600 text-sm hover:underline">
            Sign In
          </a>
        </p>
      </div>
  )
}

export default AuthNavbar;