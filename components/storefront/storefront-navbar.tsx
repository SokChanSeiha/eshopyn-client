'use client'

import * as React from 'react'
import { CircleUserRound, Search, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { useCart } from '@/app/context/cart-context'
import { SearchCommand } from './search-command'

export default function StorefrontNavbar() {
  const { setIsCartOpen, totalCount } = useCart()
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)

  return (
    <>
      <header className="max-w-full border-b border-gray-200 shadow-xs py-4">
        <div className="w-full flex justify-between max-w-8/10 mx-auto items-center">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 font-bold text-white shadow-xs">
              E
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Shopyn
            </span>
          </Link>

          <div className="flex gap-5 justify-center items-center">
            {/* Search Trigger Button styled like an input pill */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center justify-between w-48 sm:w-64 h-9 px-4 rounded-full border border-gray-200 bg-gray-100 text-sm text-gray-500 hover:bg-gray-200/70 transition-colors cursor-pointer"
            >
              <span>Search...</span>
              <div className="flex items-center gap-1.5">
                <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-white px-1.5 font-mono text-[10px] font-medium text-gray-500">
                  <span className="text-xs">⌘</span>K
                </kbd>
                <Search className="size-4 shrink-0 text-gray-500" />
              </div>
            </button>

            {/* Cart Trigger */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative cursor-pointer p-1 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-6 h-6" />
              {totalCount > 0 && (
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-indigo-600 ring-2 ring-white" />
              )}
            </button>

            {/* Profile */}
            <CircleUserRound className="w-6 h-6 text-gray-700 hover:text-gray-900 cursor-pointer" />
          </div>
        </div>
      </header>

      {/* Global Command Dialog Modal */}
      <SearchCommand open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </>
  )
}