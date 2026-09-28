'use client'

import * as React from 'react'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const CATEGORIES = [
  { id: 'camera', label: 'Camera' },
  { id: 'laptop', label: 'Laptop' },
  { id: 'phone', label: 'Phone' },
  { id: 'accessory', label: 'Accessory' },
  { id: 'tablet', label: 'Tablet' },
]

const PRODUCTS = Array.from({ length: 8 }).map((_, index) => ({
  id: index + 1,
  name: 'Camera Polaroid',
  price: '$119.00',
  rating: '4.5',
  image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=800',
}))

export default function ProductLists() {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null)

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-10">
      {/* Header Section */}
      <div className="text-center space-y-2 mb-8">
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
            className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow"
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
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}