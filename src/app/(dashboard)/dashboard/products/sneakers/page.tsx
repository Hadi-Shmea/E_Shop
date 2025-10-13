"use client";

import { ProductTable } from "@/components/ProductTable";

const sneakersData = [
  {
    id: "021231",
    name: "Beigi Coffe (Navy)",
    price: 20,
    size: 40,
    qty: 234,
    date: "04/17/23 at 8:25 PM",
    status: "Available",
    image: "/shoe.png",
  },
  {
    id: "021232",
    name: "Story Honzo (Cream)",
    price: 20,
    size: 40,
    qty: 234,
    date: "04/17/23 at 8:25 PM",
    status: "Out of Stock",
    image: "/shoe.png",
  },
];

export default function SneakersPage() {
  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div>
        <h1 className="text-2xl font-bold">Sneakers</h1>
        <p className="text-sm text-gray-500">Dashboard / Product / Sneakers</p>
      </div>

      <ProductTable products={sneakersData} />
    </div>
  );
}
