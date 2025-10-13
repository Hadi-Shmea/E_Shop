"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Search, Filter, Download, Plus } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function CustomersPage() {
  const customers = [
    {
      id: "12451",
      name: "Leslie Alexander",
      email: "georgia@example.com",
      phone: "+62 819 1314 1435",
      purchases: "$21.78",
      orderQty: "30 Order",
      address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    },
    {
      id: "12452",
      name: "Guy Hawkins",
      email: "guys@example.com",
      phone: "+62 819 1314 1435",
      purchases: "$21.78",
      orderQty: "30 Order",
      address: "4517 Washington Ave. Manchester, Kentucky 39495",
    },
    {
      id: "12453",
      name: "Kristin Watson",
      email: "kristin@example.com",
      phone: "+62 819 1314 1435",
      purchases: "$21.78",
      orderQty: "30 Order",
      address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    },
  ];

  return (
    <div className="p-6 space-y-6 text-foreground transition-colors">
      {/* === Page Header === */}
      <div>
        <h1 className="text-2xl font-bold">Customer</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Dashboard &gt; Customer
        </p>
      </div>

      {/* === Search & Actions === */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Search */}
        <div className="flex items-center border rounded-md px-2 w-full md:w-96 dark:border-gray-700 dark:bg-gray-900">
          <Search className="h-4 w-4 text-gray-400 mr-2" />
          <Input
            type="text"
            placeholder="Search for id, name Customer"
            className="border-0 focus-visible:ring-0 dark:bg-gray-900 dark:text-gray-100"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            <Filter className="h-4 w-4 mr-2" /> Filter
          </Button>
          <Button
            variant="outline"
            className="dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            <Download className="h-4 w-4 mr-2" /> Export
          </Button>
          <Link href="/dashboard/customers/add">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
              <Plus className="h-4 w-4 mr-2" /> Add Customer
            </Button>
          </Link>
        </div>
      </div>

      {/* === Table === */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 transition-colors">
        <Table>
          <TableHeader>
            <TableRow className="dark:border-gray-800">
              <TableHead className="w-16"></TableHead>
              <TableHead className="dark:text-gray-300">
                Name Customer
              </TableHead>
              <TableHead className="dark:text-gray-300">Contact</TableHead>
              <TableHead className="dark:text-gray-300">Purchases</TableHead>
              <TableHead className="dark:text-gray-300">Order QTY</TableHead>
              <TableHead className="dark:text-gray-300">Address</TableHead>
              <TableHead className="dark:text-gray-300">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {customers.map((customer) => (
              <TableRow
                key={customer.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-800 dark:border-gray-800 transition"
              >
                <TableCell>
                  <input
                    type="checkbox"
                    className="accent-blue-600 dark:accent-blue-500"
                  />
                </TableCell>
                <TableCell>
                  <div>
                    <Link
                      href="#"
                      className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                    >
                      ID {customer.id}
                    </Link>
                    <p className="font-medium dark:text-gray-100">
                      {customer.name}
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="text-sm dark:text-gray-200">{customer.email}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {customer.phone}
                  </p>
                </TableCell>
                <TableCell className="dark:text-gray-100">
                  {customer.purchases}
                </TableCell>
                <TableCell className="dark:text-gray-100">
                  {customer.orderQty}
                </TableCell>
                <TableCell className="max-w-[200px] truncate dark:text-gray-200">
                  {customer.address}
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

      {/* === Pagination === */}
      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
        <p>1 - 10 of 13 Pages</p>
        <div className="flex items-center gap-2">
          <span>The page on</span>
          <select className="border rounded px-2 py-1 text-sm dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100">
            <option>1</option>
            <option>2</option>
          </select>
        </div>
      </div>
    </div>
  );
}
