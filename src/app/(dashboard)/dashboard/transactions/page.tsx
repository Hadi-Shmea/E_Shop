"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const orderTabs = [
  { key: "all", label: "All Orders", count: 441 },
  { key: "shipping", label: "Shipping", count: 100 },
  { key: "completed", label: "Completed", count: 300 },
  { key: "cancelled", label: "Cancel", count: 41 },
];

export default function TransactionsPage() {
  const [tab, setTab] = useState("all");

  const orders = [
    {
      id: "021231",
      product: "Kanky Kitadakate (Green)",
      customer: "Leslie Alexander",
      price: "$21.78",
      date: "04/17/23",
      payment: "Paid",
      status: "Shipping",
    },
    {
      id: "021232",
      product: "Story Honzo (Cream)",
      customer: "Leslie Alexander",
      price: "$27.10",
      date: "04/17/23",
      payment: "Unpaid",
      status: "Cancelled",
    },
    {
      id: "021233",
      product: "Beige Coffee (Navy)",
      customer: "Leslie Alexander",
      price: "$18.30",
      date: "04/17/23",
      payment: "Paid",
      status: "Shipping",
    },
  ];

  const filterOrders = (status: string) => {
    if (status === "all") return orders;
    return orders.filter(
      (o) => o.status.toLowerCase() === status.toLowerCase()
    );
  };

  return (
    <div className="space-y-6 p-6 text-foreground transition-colors">
      {/* === Header === */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <Input
          placeholder="Search for id, name product"
          className="w-full md:w-1/3 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
        />

        <div className="flex items-center gap-2">
          <Button variant="outline" className="dark:border-gray-700">
            Filter
          </Button>
          <Button variant="outline" className="dark:border-gray-700">
            Export
          </Button>
          <Link href="/dashboard/transactions/add">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
              New Order +
            </Button>
          </Link>
        </div>
      </div>

      {/* === Tabs === */}
      <div className="flex border rounded-lg overflow-hidden text-sm dark:border-gray-700 transition-colors">
        {orderTabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`flex-1 px-4 py-2 transition-colors ${
              tab === t.key
                ? "bg-blue-100 text-blue-600 font-medium dark:bg-blue-900/40 dark:text-blue-300"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {t.label} ({t.count})
          </button>
        ))}
      </div>

      {/* === Table === */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 transition-colors">
        <Table>
          <TableHeader>
            <TableRow className="dark:border-gray-700">
              <TableHead>Order</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filterOrders(tab).map((order, idx) => (
              <TableRow key={idx} className="dark:border-gray-700">
                <TableCell className="font-medium">
                  {order.id}
                  <br />
                  <span className="text-gray-500 dark:text-gray-400">
                    {order.product}
                  </span>
                </TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.price}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      order.payment === "Paid"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300"
                    }
                  >
                    {order.payment}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    className={
                      order.status === "Shipping"
                        ? "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300"
                        : "bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-300"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="flex gap-2">
                  <Button size="sm" variant="ghost">
                    👁
                  </Button>
                  <Button size="sm" variant="ghost">
                    ✏️
                  </Button>
                  <Button size="sm" variant="ghost">
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
