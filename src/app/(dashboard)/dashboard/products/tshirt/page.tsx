"use client";

import { ProductTable } from "@/components/ProductTable";

const tshirtData = [
  {
    id: "054311",
    name: "Classic Tee (White)",
    price: 15,
    size: "L",
    qty: 400,
    date: "04/21/23 at 10:15 AM",
    status: "Available",
    image: "/tshirt.png",
  },
];

export default function TshirtPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">T-Shirt</h1>{" "}
        <p className="text-sm text-gray-500">Dashboard / Product / T-Shirt</p>
      </div>

      <ProductTable products={tshirtData} />
    </div>
  );
}
