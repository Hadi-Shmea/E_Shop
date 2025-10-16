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
import { UploadCloud } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const [images, setImages] = useState<(string | null)[]>([
    null,
    null,
    null,
    null,
  ]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      const updated = [...images];
      updated[index] = url;
      setImages(updated);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("✅ Product saved successfully!");
      router.push("/dashboard/products");
    } catch {
      toast.error("❌ Failed to save product. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 space-y-6 text-foreground transition-colors">
      {/* === Page Header === */}
      <h1 className="text-2xl font-bold">Add Product</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Fill in the product details and upload images.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* === Product Form === */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-lg shadow p-6 space-y-4 transition-colors">
          <h2 className="text-lg font-semibold">Product Information</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
            Enter the required details to create a new product.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>SKU</Label>
              <Input
                placeholder="Enter SKU"
                className="dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
              />
            </div>
            <div>
              <Label>Product Name</Label>
              <Input
                placeholder="Product name"
                className="dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
              />
            </div>
            <div>
              <Label>Size</Label>
              <Input
                placeholder="Size"
                className="dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
              />
            </div>
            <div>
              <Label>Color</Label>
              <Input
                placeholder="Color"
                className="dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
              />
            </div>
            <div>
              <Label>Category</Label>
              <Select>
                <SelectTrigger className="dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="dark:bg-gray-900 dark:text-gray-100">
                  <SelectItem value="sneakers">Sneakers</SelectItem>
                  <SelectItem value="jacket">Jacket</SelectItem>
                  <SelectItem value="tshirt">T-Shirt</SelectItem>
                  <SelectItem value="bag">Bag</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Price</Label>
              <Input
                type="number"
                placeholder="Price"
                className="dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
              />
            </div>
            <div>
              <Label>Quantity</Label>
              <Input
                type="number"
                placeholder="Stock quantity"
                className="dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
              />
            </div>
            <div>
              <Label>Status</Label>
              <Select>
                <SelectTrigger className="dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent className="dark:bg-gray-900 dark:text-gray-100">
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="outofstock">Out of Stock</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* === Image Upload === */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 transition-colors">
          <h2 className="text-lg font-semibold">Image Product</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
            Format: SVG, PNG, JPG (max 4 MB)
          </p>

          <div className="grid grid-cols-2 gap-4">
            {images.map((img, index) => (
              <label
                key={index}
                className="border-2 border-dashed rounded-lg flex items-center justify-center h-32 cursor-pointer hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-600 transition"
              >
                {img ? (
                  <img
                    src={img}
                    alt={`Product ${index + 1}`}
                    className="object-cover w-full h-full rounded-lg"
                  />
                ) : (
                  <div className="flex flex-col items-center text-gray-400 dark:text-gray-500 text-sm">
                    <UploadCloud className="h-6 w-6 mb-1" />
                    <span>Photo {index + 1}</span>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageChange(e, index)}
                />
              </label>
            ))}
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
          {loading ? "Saving..." : "Save Product"}
        </Button>
      </div>
    </div>
  );
}
