'use client'

import * as React from 'react'
import Image from 'next/image'
import {
  Star,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Heart,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const PRODUCT = {
  title: 'Nike Pegasus 42',
  subtitle: "Older Kids' Road Running Shoes",
  price: 'S$159',
  ratingBadge: 'Highly Rated',
  description:
    'New Pegasus, new heights. This Peg 42 is paired with lightweight foam and a springy Air unit underfoot for bouncy support and all-day comfort, whether you are lapping the track or the playground. And a mesh upper keeps your footwork light and breezy, helping you fly through break time, practice and waaaaay beyond.',
  specs: [
    { label: 'Colour Shown', value: 'Black/Persian Violet/Vivid Purple/Metallic Silver' },
    { label: 'Style', value: 'IH2306-014' },
    { label: 'Country/Region of Origin', value: 'Vietnam' },
  ],
  images: [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=800',
  ],
}

const RELATED_PRODUCTS = [
  {
    id: 1,
    title: 'Nike Vomero 18',
    subtitle: "Older Kids' Road Running Shoes",
    price: 'S$122.50',
    originalPrice: 'S$175.00',
    image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 2,
    title: 'Nike Stellar Ride',
    subtitle: "Older Kids' Running Shoes",
    price: 'S$66.50',
    originalPrice: 'S$95.00',
    image: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 3,
    title: 'Nike Winflo 12',
    subtitle: "Older Kids' Road Running Shoes",
    price: 'S$115.00',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=600',
  },
]

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = React.useState(0)
  const [isFav, setIsFav] = React.useState(false)

const scrollContainerRef = React.useRef<HTMLDivElement>(null)

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      // Scrolls roughly one full card width + gap on each click
      const scrollAmount = 360
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
      <main className="max-w-full mx-24 px-4 py-8">
        {/* Main Product Showcase Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Image Gallery Column (Col 1-8) */}
          <div className="lg:col-span-8 flex flex-col-reverse md:flex-row gap-4">
            {/* Vertical Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto shrink-0 py-1">
              {PRODUCT.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative w-16 h-16 rounded-md overflow-hidden border transition-all ${
                    selectedImage === idx
                      ? 'border-black ring-1 ring-black'
                      : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Featured Image Canvas */}
            <div className="relative flex-1 aspect-square bg-[#f6f6f6] rounded-xl overflow-hidden">
              {/* "Highly Rated" Badge */}
              <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                <Star className="w-3.5 h-3.5 fill-black text-black" />
                <span>{PRODUCT.ratingBadge}</span>
              </div>

              <Image
                src={PRODUCT.images[selectedImage]}
                alt={PRODUCT.title}
                fill
                priority
                className="object-cover"
              />

              {/* Prev / Next controls */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedImage((prev) =>
                      prev === 0 ? PRODUCT.images.length - 1 : prev - 1
                    )
                  }
                  className="h-9 w-9 rounded-full bg-white/90 shadow-sm flex items-center justify-center hover:bg-white transition"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-700" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setSelectedImage((prev) =>
                      prev === PRODUCT.images.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="h-9 w-9 rounded-full bg-white/90 shadow-sm flex items-center justify-center hover:bg-white transition"
                >
                  <ChevronRight className="w-4 h-4 text-gray-700" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Product Details & Purchase Actions (Col 9-12) */}
          <div className="lg:col-span-4 lg:sticky lg:top-8 flex flex-col space-y-6">
            {/* Header info */}
            <div>
              <h1 className="text-2xl font-bold tracking-tight">{PRODUCT.title}</h1>
              <p className="text-sm text-gray-500 font-medium mt-1">{PRODUCT.subtitle}</p>
              <p className="text-base font-semibold mt-3">{PRODUCT.price}</p>
            </div>

            {/* Action CTA Buttons */}
            <div className="space-y-3 pt-2">
              <Button className="w-full h-14 bg-black hover:bg-neutral-800 text-white rounded-full font-medium text-sm transition">
                Add to Bag
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsFav(!isFav)}
                className="w-full h-14 rounded-full border border-gray-300 font-medium text-sm hover:border-black transition flex items-center justify-center gap-2"
              >
                <span>Favourite</span>
                <Heart
                  className={`w-4 h-4 ${
                    isFav ? 'fill-red-500 text-red-500' : 'text-gray-700'
                  }`}
                />
              </Button>
            </div>

            {/* Product Story / Description */}
            <div className="pt-2 text-sm text-gray-700 leading-relaxed space-y-4">
              <p>{PRODUCT.description}</p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600">
                {PRODUCT.specs.map((spec, index) => (
                  <li key={index}>
                    <span className="font-semibold text-gray-800">{spec.label}:</span>{' '}
                    {spec.value}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="text-xs font-semibold text-black underline underline-offset-4 hover:text-gray-600 transition"
              >
                View Product Details
              </button>
            </div>

            {/* Accordion Panels */}
            <div className="border-t border-gray-200 divide-y divide-gray-200">
              <details className="group py-4">
                <summary className="flex justify-between items-center cursor-pointer list-none font-medium text-sm">
                  <span>Free Delivery and Returns</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pt-3 text-xs text-gray-600 leading-relaxed">
                  Free standard delivery with your Nike Membership. Return within 30 days for an exchange or refund.
                </div>
              </details>

              <details className="group py-4">
                <summary className="flex justify-between items-center cursor-pointer list-none font-medium text-sm">
                  <div className="flex items-center gap-2">
                    <span>Reviews (27)</span>
                    <div className="flex items-center text-xs">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-black text-black" />
                      ))}
                    </div>
                  </div>
                  <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pt-3 text-xs text-gray-600">
                  Read genuine feedback from verified buyers.
                </div>
              </details>

              <details className="group py-4">
                <summary className="flex justify-between items-center cursor-pointer list-none font-medium text-sm">
                  <span>FAQ (9)</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pt-3 text-xs text-gray-600">
                  Find answers to commonly asked questions about sizing, care, and wear.
                </div>
              </details>
            </div>
          </div>
        </div>


      </main>
  )
}