"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const categories = [
  { key: "sneakers", label: "Sneakers", count: 50 },
  { key: "jacket", label: "Jacket", count: 26 },
  { key: "tshirt", label: "T-Shirt", count: 121 },
  { key: "bag", label: "Bag", count: 21 },
];

export function ProductTable({ products }: { products: any[] }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="space-y-6">
      {/* --- Top Controls --- */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <Input
          placeholder="Search for id, name product"
          className="w-full md:w-1/3 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700"
        />

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="dark:border-gray-700 dark:text-gray-200"
          >
            Filter
          </Button>
          <Button
            variant="outline"
            className="dark:border-gray-700 dark:text-gray-200"
          >
            Export
          </Button>
          <Link href="/dashboard/products/add">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
              New Product +
            </Button>
          </Link>
        </div>
      </div>

      {/* --- Category Tabs --- */}
      <div className="flex border rounded-lg overflow-hidden text-sm dark:border-gray-700">
        {categories.map((cat) => {
          const href = `/dashboard/products/${cat.key}`;
          const isActive = pathname === href;

          return (
            <button
              key={cat.key}
              onClick={() => router.push(href)}
              className={`flex-1 px-4 py-2 transition ${
                isActive
                  ? "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 font-medium"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200"
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          );
        })}
      </div>

      {/* --- Table --- */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
        <Table>
          <TableHeader>
            <TableRow className="dark:border-gray-700">
              <TableHead className="dark:text-gray-300">Product</TableHead>
              <TableHead className="dark:text-gray-300">Price</TableHead>
              <TableHead className="dark:text-gray-300">Size</TableHead>
              <TableHead className="dark:text-gray-300">QTY</TableHead>
              <TableHead className="dark:text-gray-300">Date</TableHead>
              <TableHead className="dark:text-gray-300">Status</TableHead>
              <TableHead className="dark:text-gray-300">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((p) => (
              <TableRow
                key={p.id}
                className="dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                <TableCell className="dark:text-gray-100">{p.name}</TableCell>
                <TableCell className="dark:text-gray-100">${p.price}</TableCell>
                <TableCell className="dark:text-gray-100">{p.size}</TableCell>
                <TableCell className="dark:text-gray-100">{p.qty}</TableCell>
                <TableCell className="dark:text-gray-100">{p.date}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      p.status === "Available"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400"
                        : "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400"
                    }
                  >
                    {p.status}
                  </Badge>
                </TableCell>
                <TableCell className="flex gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="dark:hover:bg-gray-800"
                  >
                    👁
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="dark:hover:bg-gray-800"
                  >
                    ✏️
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="dark:hover:bg-gray-800"
                  >
                    🗑
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
