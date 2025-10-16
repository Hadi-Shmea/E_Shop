"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function AddOrderPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSave = async () => {
    setLoading(true);
    try {
      // simulate saving
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("✅ Order created successfully!");
      router.push("/dashboard/transactions");
    } catch (err) {
      toast.error("❌ Failed to create order. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 space-y-6 text-foreground transition-colors">
      {/* === Page Header === */}
      <div>
        <h1 className="text-2xl font-bold">Add Order</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Fill in the order details to create a new transaction.
        </p>
      </div>

      {/* === Order Form === */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 space-y-4 transition-colors">
        <h2 className="text-lg font-semibold">Order Information</h2>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
          Enter the required details to create a new order.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Order ID</Label>
            <Input
              placeholder="Enter order ID"
              className="dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
            />
          </div>
          <div>
            <Label>Product</Label>
            <Input
              placeholder="Product name"
              className="dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
            />
          </div>
          <div>
            <Label>Customer</Label>
            <Input
              placeholder="Customer name"
              className="dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
            />
          </div>
          <div>
            <Label>Price</Label>
            <Input
              type="number"
              placeholder="Price"
              className="dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
            />
          </div>
          <div>
            <Label>Date</Label>
            <Input
              type="date"
              className="dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
            />
          </div>
          <div>
            <Label>Payment</Label>
            <Select>
              <SelectTrigger className="dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100">
                <SelectValue placeholder="Select payment status" />
              </SelectTrigger>
              <SelectContent className="dark:bg-gray-800 dark:text-gray-100">
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="unpaid">Unpaid</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Status</Label>
            <Select>
              <SelectTrigger className="dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100">
                <SelectValue placeholder="Select order status" />
              </SelectTrigger>
              <SelectContent className="dark:bg-gray-800 dark:text-gray-100">
                <SelectItem value="shipping">Shipping</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* === Save Button === */}
      <div className="flex justify-end">
        <Button
          className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
          onClick={handleSave}
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Order"}
        </Button>
      </div>
    </div>
  );
}
