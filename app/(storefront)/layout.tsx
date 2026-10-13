import AuthNavbar from "@/components/auth/auth-navbar";

export default function StorefrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex-1 flex flex-col">
      {/* Header */}
      <AuthNavbar />

      {/* Main Full-Width Content Container */}
      <div className="w-full max-w-8/10 mx-auto">
        {children}
      </div>
    </div>
  );
}