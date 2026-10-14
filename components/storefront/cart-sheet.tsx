'use client'

import * as React from 'react'
import Image from 'next/image'
import { Plus, Minus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { useCart } from '@/app/context/cart-context'

export function CartSheet() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, subtotal } = useCart()

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent side="right" className="w-full sm:max-w-md flex flex-col p-6">
        <SheetHeader className="pb-4">
          <SheetTitle className="text-2xl font-bold text-center">Carts</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto divide-y divide-gray-100 pr-1">
          {cart.length === 0 ? (
            <div className="h-full flex items-center justify-center text-sm text-gray-500">
              Your cart is empty.
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="py-4 flex items-center gap-3">
                <div className="relative h-16 w-16 rounded-xl bg-gray-100 overflow-hidden shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 truncate">{item.name}</h4>
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
  )
}