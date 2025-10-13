"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

export default function SalesReportPage() {
  const [dateRange, setDateRange] = useState("last30days");

  const salesData = [
    { date: "Sep 1", revenue: 400 },
    { date: "Sep 5", revenue: 700 },
    { date: "Sep 10", revenue: 300 },
    { date: "Sep 15", revenue: 900 },
    { date: "Sep 20", revenue: 1200 },
    { date: "Sep 25", revenue: 800 },
  ];

  const categoryData = [
    { category: "Sneakers", revenue: 12000 },
    { category: "Jackets", revenue: 8000 },
    { category: "T-Shirts", revenue: 15000 },
    { category: "Bags", revenue: 6000 },
  ];

  const recentOrders = [
    {
      id: "1001",
      customer: "Leslie Alexander",
      product: "Kanky Kitadakate",
      total: "$210",
      status: "Completed",
      date: "09/10/23",
    },
    {
      id: "1002",
      customer: "Jacob Jones",
      product: "Story Honzo",
      total: "$110",
      status: "Shipping",
      date: "09/12/23",
    },
    {
      id: "1003",
      customer: "Kristin Watson",
      product: "Beige Coffee",
      total: "$85",
      status: "Cancelled",
      date: "09/14/23",
    },
  ];

  return (
    <div className="p-6 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Sales Report</h1>
          <p className="text-sm text-muted-foreground">
            Insights into revenue and order performance
          </p>
        </div>
        <div className="flex gap-2">
          <Input
            type="date"
            className="w-40"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          />
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" /> Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { title: "Total Revenue", value: "$42,300" },
          { title: "Total Orders", value: "441" },
          { title: "Avg Order Value", value: "$95.80" },
          { title: "Returning Customers", value: "35%" },
        ].map((item) => (
          <Card key={item.title} className="bg-card shadow-sm">
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">{item.title}</p>
              <h2 className="text-xl font-bold">{item.value}</h2>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="p-6 bg-card shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Sales Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="currentColor"
              opacity={0.1}
            />
            <XAxis dataKey="date" stroke="currentColor" />
            <YAxis stroke="currentColor" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#3b82f6"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Card className="p-6 bg-card shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Revenue by Category</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={categoryData}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="currentColor"
              opacity={0.1}
            />
            <XAxis dataKey="category" stroke="currentColor" />
            <YAxis stroke="currentColor" />
            <Tooltip />
            <Bar dataKey="revenue" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card className="p-6 bg-card shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map((o) => (
              <TableRow key={o.id}>
                <TableCell>{o.id}</TableCell>
                <TableCell>{o.customer}</TableCell>
                <TableCell>{o.product}</TableCell>
                <TableCell>{o.total}</TableCell>
                <TableCell>{o.status}</TableCell>
                <TableCell>{o.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
