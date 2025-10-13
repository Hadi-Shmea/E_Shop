"use client";

import { ProductTable } from "@/components/ProductTable";

const jacketData = [
  {
    id: "032451",
    name: "Denim Jacket (Blue)",
    price: 45,
    size: "M",
    qty: 120,
    date: "04/20/23 at 6:10 PM",
    status: "Available",
    image: "/jacket.png",
  },
];

export default function JacketPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Jacket</h1>
        <p className="text-sm text-gray-500">Dashboard / Product / Jacket</p>
      </div>

      <ProductTable products={jacketData} />
    </div>
  );
}
