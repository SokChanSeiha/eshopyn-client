import AuthNavbar from "@/components/auth/auth-navbar";
import StorefrontNavbar from "@/components/storefront/storefront-navbar";
import { CartSheet } from "@/components/storefront/cart-sheet";
import { CartProvider } from "../context/cart-context";

export default function StorefrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <div className="w-full flex-1 flex flex-col">
        {/* Header */}
        <StorefrontNavbar />

        {/* Main Full-Width Content Container */}
        <div className="w-full max-w-8/10 mx-auto">
          {children}
        </div>

        {/* Global Cart Slide-over Drawer */}
        <CartSheet />
      </div>
    </CartProvider>
  );
}