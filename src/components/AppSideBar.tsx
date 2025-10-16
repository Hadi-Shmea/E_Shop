"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  HelpCircle,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle"; // ✅ import toggle

export function AppSidebar() {
  const pathname = usePathname();

  const linkClasses = (href: string) =>
    `flex items-center gap-2 p-2 rounded transition ${
      pathname === href
        ? "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 font-medium"
        : "hover:bg-muted dark:hover:bg-gray-800"
    }`;

  const SidebarContent = (
    <div className="flex flex-col justify-between h-full bg-card">
      <div>
        {/* Logo */}
        <div className="px-6 py-4 border-b">
          <h1 className="text-xl font-bold text-blue-600">Culters</h1>
          <p className="text-xs text-gray-500">Kanky Store</p>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-6 space-y-2 text-sm ">
          <p className="text-xs font-semibold text-gray-400 mb-2">GENERAL</p>

          <Link href="/dashboard" className={linkClasses("/dashboard")}>
            <Home className="h-4 w-4" /> Dashboard
          </Link>

          {/* Collapsible Product Menu */}
          <details
            className="group"
            open={pathname.startsWith("/dashboard/products")}
          >
            <summary className="flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-muted list-none">
              <Package className="h-4 w-4" />
              Product (119)
            </summary>
            <div className="ml-6 mt-1 space-y-1">
              <Link
                href="/dashboard/products/sneakers"
                className={
                  pathname === "/dashboard/products/sneakers"
                    ? "block text-blue-600 font-medium"
                    : "block hover:text-blue-600"
                }
              >
                Sneakers
              </Link>
              <Link
                href="/dashboard/products/jacket"
                className={
                  pathname === "/dashboard/products/jacket"
                    ? "block text-blue-600 font-medium"
                    : "block hover:text-blue-600"
                }
              >
                Jacket
              </Link>
              <Link
                href="/dashboard/products/tshirt"
                className={
                  pathname === "/dashboard/products/tshirt"
                    ? "block text-blue-600 font-medium"
                    : "block hover:text-blue-600"
                }
              >
                T-Shirt
              </Link>
              <Link
                href="/dashboard/products/bag"
                className={
                  pathname === "/dashboard/products/bag"
                    ? "block text-blue-600 font-medium"
                    : "block hover:text-blue-600"
                }
              >
                Bag
              </Link>
            </div>
          </details>

          <Link
            href="/dashboard/transactions"
            className={linkClasses("/dashboard/transactions")}
          >
            <ShoppingCart className="h-4 w-4" /> Transaction (441)
          </Link>

          <Link
            href="/dashboard/customers"
            className={linkClasses("/dashboard/customers")}
          >
            <Users className="h-4 w-4" /> Customers
          </Link>

          <Link
            href="/dashboard/reports"
            className={linkClasses("/dashboard/reports")}
          >
            <BarChart3 className="h-4 w-4" /> Sales Report
          </Link>

          {/* Tools */}
          <p className="text-xs font-semibold text-gray-400 mt-6 mb-2">TOOLS</p>

          <Link
            href="/dashboard/settings"
            className={linkClasses("/dashboard/settings")}
          >
            <Settings className="h-4 w-4" /> Account & Settings
          </Link>

          <Link
            href="/dashboard/help"
            className={linkClasses("/dashboard/help")}
          >
            <HelpCircle className="h-4 w-4" /> Help
          </Link>

          {/* ✅ Dark Mode Toggle */}
          <div className="flex items-center gap-2 p-2 rounded hover:bg-muted w-full">
            <ThemeToggle />
            <span className="text-sm">Dark Mode</span>
          </div>
        </nav>
      </div>

      {/* User Info */}
      <div className="p-4 border-t flex items-center gap-3">
        <img
          src="/avatar.png"
          alt="User"
          className="w-10 h-10 rounded-full border"
        />
        <div>
          <p className="text-sm font-medium">Guy Hawkins</p>
          <p className="text-xs text-gray-500">Admin</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex max-w-64 bg-card dark:bg-gray-900 border-r ">
        {SidebarContent}
      </aside>

      {/* Mobile Sidebar (Drawer) */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            ☰
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          {SidebarContent}
        </SheetContent>
      </Sheet>
    </>
  );
}
