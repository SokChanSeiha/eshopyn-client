import * as React from "react";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { AppSidebar } from "@/components/admin/app-sidebar";
import { CircleUserRound } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      {/* Left Sidebar */}
      <AppSidebar />

      {/* Right Content Area */}
      <SidebarInset>
        {/* Top Admin Header Bar */}
        <header className="flex h-14 shrink-0 items-center justify-between gap-2 border-b px-4 bg-white">
          
          <SidebarTrigger className="-ml-1" />
          <span className="text-sm font-semibold text-gray-700">
            <CircleUserRound className="size-6" />
          </span>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}