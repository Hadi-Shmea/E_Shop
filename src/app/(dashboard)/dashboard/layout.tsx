"use client";
import { AppSidebar } from "@/components/AppSideBar";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-muted text-black text-foreground">
      {/* Sidebar */}
      <AppSidebar />
      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-card border-b px-6 py-3 flex items-center justify-between">
          {/* Search */}
          <div className="flex items-center gap-3 flex-1">
            <input
              type="text"
              placeholder="Search product"
              className="w-full max-w-sm border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <button className="relative">
              🔔
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button>✉️</button>
            <img
              src="/avatar.png"
              alt="Profile"
              className="w-9 h-9 rounded-full border"
            />
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
