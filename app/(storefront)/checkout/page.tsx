'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck, ArrowDown, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useCart } from '@/app/context/cart-context'

export default function CheckoutPage() {
  const { cart, subtotal } = useCart()
  const [paymentMethod, setPaymentMethod] = React.useState<'card' | 'cod'>('card')

  // Scroll state
  const [isScrollable, setIsScrollable] = React.useState(false)
  const [isAtBottom, setIsAtBottom] = React.useState(false)

  // Calculations
  const shippingFee = cart.length > 0 ? 2.5 : 0.0
  const vatIncluded = subtotal * 0.1
  const total = subtotal + shippingFee

  React.useEffect(() => {
    const handleScrollCheck = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight

      // Check if page actually exceeds the viewport by at least 80px
      const canScroll = docHeight > windowHeight + 80
      setIsScrollable(canScroll)

      // Near the bottom if within 120px of the page end
      const reachedBottom = scrollY + windowHeight >= docHeight - 120
      setIsAtBottom(reachedBottom)
    }

    // Run on mount, on scroll, on resize, and slightly delayed for image loads
    handleScrollCheck()
    const timer = setTimeout(handleScrollCheck, 300)

    window.addEventListener('scroll', handleScrollCheck, { passive: true })
    window.addEventListener('resize', handleScrollCheck)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScrollCheck)
      window.removeEventListener('resize', handleScrollCheck)
    }
  }, [cart])

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    })
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative w-full">
      {/* Breadcrumbs & Header */}
      <div className="py-4">
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-gray-900">
          Complete your orders
        </h1>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: Sticky in viewport */}
        <div className="lg:col-span-7 lg:sticky lg:top-8 space-y-6">
          {/* Section 1: Shipping Information */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                1
              </span>
              <h2 className="text-lg font-bold text-gray-900">Shipping information</h2>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="firstName" className="text-xs font-semibold text-gray-700">
                    First name
                  </Label>
                  <Input
                    id="firstName"
                    defaultValue="Sokha"
                    className="h-10 rounded-lg border-gray-200 text-sm focus-visible:ring-1"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-xs font-semibold text-gray-700">
                    Phone number
                  </Label>
                  <Input
                    id="phone"
                    defaultValue="+855 12 345 678"
                    className="h-10 rounded-lg border-gray-200 text-sm focus-visible:ring-1"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="street" className="text-xs font-semibold text-gray-700">
                  Street address
                </Label>
                <Input
                  id="street"
                  placeholder="House number and street name"
                  className="h-10 rounded-lg border-gray-200 text-sm focus-visible:ring-1 placeholder:text-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Payment Method */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                2
              </span>
              <h2 className="text-lg font-bold text-gray-900">Payment method</h2>
            </div>

            <div className="space-y-3">
              <div
                onClick={() => setPaymentMethod('card')}
                className={`cursor-pointer rounded-xl border p-4 transition-colors ${
                  paymentMethod === 'card'
                    ? 'border-gray-900 bg-neutral-100/70'
                    : 'border-gray-200 bg-white hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="h-4 w-4 accent-black cursor-pointer"
                    />
                    <span className="text-sm font-semibold text-gray-900">
                      Credit or debit card
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">Bakong KHQR</span>
                </div>
              </div>

              <div
                onClick={() => setPaymentMethod('cod')}
                className={`cursor-pointer rounded-xl border p-4 flex items-center justify-between transition-colors ${
                  paymentMethod === 'cod'
                    ? 'border-gray-900 bg-neutral-100/70'
                    : 'border-gray-200 bg-white hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    className="h-4 w-4 accent-black cursor-pointer"
                  />
                  <span className="text-sm font-semibold text-gray-900">
                    Cash on delivery
                  </span>
                </div>
                <span className="text-xs text-gray-500">Pay when it arrives</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Long scrollable list */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                  3
                </span>
                <h2 className="text-lg font-bold text-gray-900">Orders Summary</h2>
              </div>
              <span className="text-xs text-gray-500 font-medium">
                {cart.length} {cart.length === 1 ? 'item' : 'items'}
              </span>
            </div>

            <div className="divide-y divide-gray-100 my-2">
              {cart.length === 0 ? (
                <div className="py-8 text-center text-sm text-gray-400">
                  No items in cart.{' '}
                  <Link href="/products" className="text-indigo-600 underline">
                    Browse products
                  </Link>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="py-4 flex items-center gap-3">
                    <div className="relative h-16 w-16 rounded-xl bg-gray-100 overflow-hidden shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-gray-900 truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500">Qty {item.quantity}</p>
                      <p className="text-xs font-bold text-gray-900 mt-1">
                        US${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="space-y-2 pt-4 border-t border-gray-100 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-gray-900">US${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-semibold text-gray-900">US${shippingFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>VAT included</span>
                <span className="font-medium text-gray-700">US${vatIncluded.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-gray-900 pt-3 border-t border-gray-100">
                <span>Total</span>
                <span>US${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Button
              type="button"
              className="w-full h-12 rounded-xl bg-black text-white hover:bg-neutral-800 font-semibold text-sm shadow-xs cursor-pointer"
            >
              Place order · US${total.toFixed(2)}
            </Button>
 

            <p className="text-center text-[11px] text-gray-400 px-4 leading-relaxed">
              By placing your order, you agree to Shopyn&apos;s Terms &amp; Conditions and Privacy Policy.
            </p>

            <div className="flex items-center justify-center gap-2 rounded-xl bg-neutral-100/80 py-3 text-xs font-medium text-emerald-800">
              <ShieldCheck className="h-4 w-4 text-emerald-700 shrink-0" />
              <span>Protected payment · Easy returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      {isScrollable && (
        <aside aria-label="Page scroll navigation" className="fixed bottom-6 right-6 z-50">
          {!isAtBottom ? (
            <button
              type="button"
              onClick={scrollToBottom}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-black  text-white shadow-xl hover:bg-neutral-800 active:scale-95 transition-all duration-200 cursor-pointer"
              aria-label="Scroll to bottom"
            >
              <ArrowDown className="h-5 w-5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={scrollToTop}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-900 border-2  border-black shadow-xl hover:bg-gray-100 active:scale-95 transition-all duration-200 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          )}
        </aside>
      )}
    </div>
  )
}