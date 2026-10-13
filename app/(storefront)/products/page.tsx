'use client'

import * as React from 'react'
import Image from 'next/image'
import { Star, Trash2, Plus, Minus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

interface Product {
  id: number
  name: string
  price: number
  rating: string
  image: string
}

interface CartItem extends Product {
  quantity: number
}

const CATEGORIES = [
  { id: 'camera', label: 'Camera' },
  { id: 'laptop', label: 'Laptop' },
  { id: 'phone', label: 'Phone' },
  { id: 'accessory', label: 'Accessory' },
  { id: 'tablet', label: 'Tablet' },
]

const PRODUCTS: Product[] = Array.from({ length: 8 }).map((_, index) => ({
  id: index + 1,
  name: 'Polaroid Camera',
  price: 120,
  rating: '4.5',
  image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=800',
}))

export default function ProductLists() {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null)
  const [cart, setCart] = React.useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = React.useState(false)

  // Add product to cart & trigger drawer
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
    setIsCartOpen(true)
  }

  // Update item quantity
  const updateQuantity = (id: number, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta
            return nextQty > 0 ? { ...item, quantity: nextQty } : null
          }
          return item
        })
        .filter((item): item is CartItem => item !== null)
    )
  }

  // Remove single line item
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <main className="max-w-full">
      {/* Header Section */}
      <div className="text-center py-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Our Product</h1>
        <p className="text-sm text-gray-500 font-medium">
          You&apos;ll find everything maximize your life to another level, stay amazing !
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        <Button
          onClick={() => setSelectedCategory(null)}
          className={`h-9 px-6 rounded-lg text-sm font-medium transition-colors ${
            selectedCategory === null
              ? 'bg-black text-white hover:bg-black/90'
              : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-100'
          }`}
        >
          All
        </Button>

        {CATEGORIES.map((category) => (
          <Button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`h-9 px-5 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-black text-white hover:bg-black/90'
                : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-100'
            }`}
          >
            {category.label}
          </Button>
        ))}

        <Button
          type="button"
          className="h-9 px-6 rounded-lg text-sm font-medium bg-[#1e88e5] hover:bg-[#1976d2] text-white uppercase tracking-wider"
        >
          MORE
        </Button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            onClick={() => addToCart(product)}
            className="group cursor-pointer flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow"
          >
            {/* Image Container with Badge */}
            <div className="relative aspect-4/3 w-full bg-[#f4f4f4] overflow-hidden">
              <span className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 rounded-full border border-gray-300 bg-white/95 px-2.5 py-0.5 text-xs font-semibold text-gray-800 shadow-2xs backdrop-blur-xs">
                <Star className="w-3 h-3 fill-gray-900 text-gray-900" />
                {product.rating}
              </span>

              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Meta */}
            <div className="flex items-center justify-between p-4 pt-3 bg-white">
              <h3 className="text-sm font-medium text-gray-900 truncate">
                {product.name}
              </h3>
              <p className="text-sm font-bold text-gray-900 shrink-0">
                ${product.price}.00
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Drawer / Slide-Over Sheet */}
      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <SheetContent side="right" className="w-full sm:max-w-md flex flex-col p-6">
          <SheetHeader className="pb-4">
            <SheetTitle className="text-2xl font-bold text-center">Carts</SheetTitle>
          </SheetHeader>

          {/* Cart Item List (Scrollable Area) */}
          <div className="flex-1 overflow-y-auto divide-y divide-gray-100 pr-1">
            {cart.length === 0 ? (
              <div className="h-full flex items-center justify-center text-sm text-gray-500">
                Your cart is empty.
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="py-4 flex items-center gap-3">
                  {/* Thumbnail */}
                  <div className="relative h-16 w-16 rounded-xl bg-gray-100 overflow-hidden shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Info & Quantity Stepper */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-900 truncate">
                      {item.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, 1)}
                        className="h-6 w-6 inline-flex items-center justify-center rounded-md hover:bg-gray-100 text-gray-600 transition-colors"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                      <span className="text-sm font-medium">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, -1)}
                        className="h-6 w-6 inline-flex items-center justify-center rounded-md hover:bg-gray-100 text-gray-600 transition-colors"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>

                  {/* Trash Icon & Line-Item Price */}
                  <div className="flex flex-col items-end justify-between self-stretch">
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-600 p-1 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                    <span className="text-sm font-semibold text-gray-900">
                      ${item.price * item.quantity}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Area Matching Figma */}
          {cart.length > 0 && (
            <div className="pt-4 border-t border-gray-100 space-y-4">
              <div className="flex justify-between items-baseline text-xs text-gray-500">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">${subtotal.toLocaleString()}</span>
              </div>
              <p className="text-[11px] text-gray-400">
                Delivery Fee will be shown after you review order
              </p>
              <div className="flex justify-between items-center text-lg font-bold text-gray-900 pt-2">
                <span>Total</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>

              <Button className="w-full h-12 bg-neutral-950 hover:bg-neutral-900 text-white rounded-xl font-medium text-sm transition-colors">
                Review Order
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </main>
  )
}