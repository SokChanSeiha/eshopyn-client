"use client";

import { CircleUserRound, Search, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Field } from "../ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { useCart } from "@/app/context/cart-context";

function StorefrontNavbar() {
  const { setIsCartOpen, totalCount } = useCart();

  return (
    <header className="max-w-full border-b border-gray shadow py-4">
      <div className="w-full flex justify-between max-w-8/10 mx-auto">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 font-bold text-white shadow-sm">
            E
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Shopyn
          </span>
        </Link>

        <div className="flex gap-5 justify-center items-center">
          <div>
            <Field>
              <InputGroup className="rounded-full overflow-hidden border bg-gray-100">
                <InputGroupInput
                  id="input-group-url"
                  placeholder="Search"
                  className="rounded-full pl-4"
                />
                <InputGroupAddon align="inline-end" className="pr-3">
                  <Search className="size-6 shrink-0 text-gray-500" />
                </InputGroupAddon>
              </InputGroup>
            </Field>
          </div>

          {/* Cart Icon with Click Action & Count Badge */}
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

          <CircleUserRound className="w-6 h-6 text-gray-700 hover:text-gray-900 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default StorefrontNavbar;
