"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", avgSale: 200000000, avgItem: 180000000 },
  { month: "Feb", avgSale: 250000000, avgItem: 190000000 },
  { month: "Mar", avgSale: 220000000, avgItem: 200000000 },
  { month: "Apr", avgSale: 280000000, avgItem: 210000000 },
  { month: "May", avgSale: 300000000, avgItem: 250000000 },
  { month: "Jun", avgSale: 310000000, avgItem: 260000000 },
  { month: "Jul", avgSale: 339091888, avgItem: 211411223 },
  { month: "Aug", avgSale: 320000000, avgItem: 280000000 },
  { month: "Sep", avgSale: 350000000, avgItem: 300000000 },
  { month: "Oct", avgSale: 330000000, avgItem: 290000000 },
  { month: "Nov", avgSale: 340000000, avgItem: 310000000 },
  { month: "Dec", avgSale: 360000000, avgItem: 320000000 },
];

export function SalesThisYear() {
  return (
    <div className="bg-card p-6 rounded-xl shadow w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-foreground">Your Sales this year</h2>
        <button className="text-sm text-blue-600">Show All</button>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="avgSale"
            stroke="#82ca9d"
            strokeWidth={3}
            dot={false}
            name="Average Sale Value"
          />
          <Line
            type="monotone"
            dataKey="avgItem"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={false}
            name="Average Item per sale"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
