"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { UploadCloud } from "lucide-react";
import { toast } from "sonner";

const tabs = [
  { key: "account", label: "Account" },
  { key: "security", label: "Security" },
  { key: "notification", label: "Notification" },
];

export default function AccountSettingsPage() {
  const [activeTab, setActiveTab] = useState("account");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("✅ Profile updated successfully!");
    } catch {
      toast.error("❌ Failed to update profile. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Account & Settings</h1>
        <p className="text-sm text-muted-foreground">
          Manage your account details and preferences.
        </p>
      </div>

      <div className="flex border rounded-lg overflow-hidden text-sm">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 px-4 py-2 transition ${
              activeTab === tab.key
                ? "bg-primary/10 text-primary font-medium"
                : "hover:bg-muted text-muted-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "account" && (
        <div className="space-y-6">
          <div className="bg-card rounded-lg shadow-sm p-6 space-y-4">
            <h2 className="text-lg font-semibold">Profile Information</h2>

            <div className="flex items-center gap-4">
              <img
                src="/avatar.png"
                alt="Profile"
                className="w-16 h-16 rounded-full border"
              />
              <Button variant="outline" className="flex items-center gap-2">
                <UploadCloud className="w-4 h-4" /> Change Picture
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <Label>First Name</Label>
                <Input defaultValue="Cameron" />
              </div>
              <div>
                <Label>Last Name</Label>
                <Input defaultValue="Williamson" />
              </div>
              <div>
                <Label>Email</Label>
                <Input type="email" defaultValue="cameron@example.com" />
              </div>
              <div>
                <Label>Date of Birth</Label>
                <Input type="date" defaultValue="2003-12-23" />
              </div>
              <div>
                <Label>Gender</Label>
                <Input defaultValue="Male" />
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <Button onClick={handleUpdate} disabled={loading}>
                {loading ? "Updating..." : "Update"}
              </Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </div>

          <div className="bg-card rounded-lg shadow-sm p-6 space-y-4">
            <h2 className="text-lg font-semibold">Contact Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label>Phone Number</Label>
                <Input defaultValue="+62 847 1723 1123" />
              </div>
              <div>
                <Label>Country</Label>
                <Input defaultValue="Indonesia" />
              </div>
              <div>
                <Label>Address</Label>
                <Input defaultValue="Parungkuda, Kab. Sukabumi" />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <Button>Save Changes</Button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "security" && (
        <div className="bg-card rounded-lg shadow-sm p-6 space-y-4">
          <h2 className="text-lg font-semibold">Security Settings</h2>
          <p className="text-sm text-muted-foreground">
            Manage your password and login preferences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Current Password</Label>
              <Input type="password" />
            </div>
            <div>
              <Label>New Password</Label>
              <Input type="password" />
            </div>
            <div>
              <Label>Confirm Password</Label>
              <Input type="password" />
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <Button>Update Password</Button>
          </div>
        </div>
      )}

      {activeTab === "notification" && (
        <div className="bg-card rounded-lg shadow-sm p-6 space-y-4">
          <h2 className="text-lg font-semibold">Notification Preferences</h2>
          <p className="text-sm text-muted-foreground">
            Choose how you want to receive updates.
          </p>

          <div className="space-y-3">
            {[
              { label: "Email Notifications", checked: true },
              { label: "SMS Notifications", checked: false },
              { label: "Product Updates", checked: true },
            ].map((opt) => (
              <div
                key={opt.label}
                className="flex items-center justify-between border-b pb-3 last:border-none"
              >
                <span>{opt.label}</span>
                <input
                  type="checkbox"
                  defaultChecked={opt.checked}
                  className="h-4 w-4 accent-primary"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-4">
            <Button>Save Preferences</Button>
          </div>
        </div>
      )}
    </div>
  );
}
