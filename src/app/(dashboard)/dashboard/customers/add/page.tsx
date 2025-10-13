"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function AddCustomerPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSave = async () => {
    setLoading(true);
    try {
      // Simulate saving
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("✅ Customer added successfully!");
      router.push("/dashboard/customers");
    } catch (err) {
      toast.error("❌ Failed to add customer. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 space-y-6 text-foreground bg-card ">
      {/* Page Header */}
      <h1 className="text-2xl font-bold">Add Customer</h1>
      <p className="text-sm text-muted-foreground">
        Fill in the customer information below to add a new customer.
      </p>

      {/* Form Card */}
      <div className="bg-card rounded-lg shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold">Customer Information</h2>
        <p className="text-xs text-muted-foreground mb-4">
          Enter all the required details before saving.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Full Name</Label>
            <Input placeholder="Enter full name" />
          </div>

          <div>
            <Label>Email</Label>
            <Input type="email" placeholder="Enter email" />
          </div>

          <div>
            <Label>Phone Number</Label>
            <Input type="tel" placeholder="Enter phone number" />
          </div>

          <div>
            <Label>Country</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usa">USA</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="france">France</SelectItem>
                <SelectItem value="germany">Germany</SelectItem>
                <SelectItem value="uae">UAE</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="md:col-span-2">
            <Label>Address</Label>
            <textarea
              placeholder="Enter customer address"
              className="w-full min-h-[100px] border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="md:col-span-2">
            <Label>Notes</Label>
            <textarea
              placeholder="Additional notes (optional)"
              className="w-full min-h-[100px] border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <Label>Status</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Customer Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="regular">Regular</SelectItem>
                <SelectItem value="vip">VIP</SelectItem>
                <SelectItem value="wholesale">Wholesale</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button
          className="bg-blue-600 text-white"
          onClick={handleSave}
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Customer"}
        </Button>
      </div>
    </div>
  );
}
