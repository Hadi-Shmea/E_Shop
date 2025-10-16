"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Mail, MessageCircle } from "lucide-react";

export default function HelpPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Help Center</h1>
        <p className="text-sm text-muted-foreground">
          Find answers to common questions or get in touch with support.
        </p>
      </div>

      <div className="flex items-center gap-2 max-w-md">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search for help..." className="w-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            title: "Managing Your Account",
            text: "Learn how to update your profile, change passwords, or set preferences.",
          },
          {
            title: "Orders & Transactions",
            text: "View, edit, and manage orders, payments, and shipping details.",
          },
          {
            title: "Products & Inventory",
            text: "Get help with adding products, managing stock, or exporting reports.",
          },
        ].map((card) => (
          <Card key={card.title} className="hover:shadow-md transition bg-card">
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {card.text}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-card shadow-sm p-6 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Still need help?</h2>
          <p className="text-sm text-muted-foreground">
            Contact our support team — we’re here 24/7.
          </p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Button variant="outline">
            <MessageCircle className="h-4 w-4 mr-2" /> Live Chat
          </Button>
          <Button>
            <Mail className="h-4 w-4 mr-2" /> Email Support
          </Button>
        </div>
      </Card>
    </div>
  );
}
