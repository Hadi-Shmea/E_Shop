"use client";

import { ProductTable } from "@/components/ProductTable";

const bagData = [
  {
    id: "076512",
    name: "Leather Bag (Black)",
    price: 60,
    size: "One Size",
    qty: 75,
    date: "04/22/23 at 12:45 PM",
    status: "Out of Stock",
    image: "/bag.png",
  },
];

export default function BagPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Bag</h1>
        <p className="text-sm text-gray-500">Dashboard / Product / Bag</p>
      </div>

      <ProductTable products={bagData} />
    </div>
  );
}
