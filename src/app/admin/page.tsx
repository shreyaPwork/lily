"use client";

import { AdminLayout } from "syntellite-admin-dashboard-ui";
import type {
  NavigationItem,
  User,
  BrandingConfig,
} from "syntellite-admin-dashboard-ui";
import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingCart,
  BarChart3,
  Settings,
  Tag,
  Truck,
} from "lucide-react";

const navigationItems: NavigationItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin",
    isActive: true,
  },
  {
    title: "Products",
    icon: Package,
    href: "/admin/products",
    badge: "12",
  },
  {
    title: "Orders",
    icon: ShoppingCart,
    href: "/admin/orders",
    badge: "5",
  },
  {
    title: "Customers",
    icon: Users,
    href: "/admin/customers",
  },
  {
    title: "Categories",
    icon: Tag,
    href: "/admin/categories",
  },
  {
    title: "Shipping",
    icon: Truck,
    href: "/admin/shipping",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/admin/analytics",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/admin/settings",
  },
];

const mockUser: User = {
  id: "1",
  name: "Admin User",
  email: "admin@lily.com",
  avatar:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
  role: "Administrator",
};

const branding: BrandingConfig = {
  logo: "/logo.png",
  title: "Lily",
  subtitle: "Admin Dashboard",
};

export default function AdminDashboard() {
  return (
    <AdminLayout
      navigation={navigationItems}
      user={mockUser}
      branding={branding}
      onLogout={() => {
        console.log("User logged out");
        // Handle logout
      }}
      onUserMenuClick={(action: string) => {
        console.log("User menu action:", action);
        // Handle user menu actions (profile, logout, etc.)
      }}
    >
      <div className="space-y-6">
        {/* Dashboard Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome to your Lily admin dashboard</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Revenue
                </p>
                <p className="text-2xl font-bold text-gray-900">$45,231.89</p>
              </div>
              <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                <BarChart3 className="h-4 w-4 text-green-600" />
              </div>
            </div>
            <p className="text-xs text-green-600 mt-2">
              +20.1% from last month
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Orders</p>
                <p className="text-2xl font-bold text-gray-900">+2350</p>
              </div>
              <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                <ShoppingCart className="h-4 w-4 text-blue-600" />
              </div>
            </div>
            <p className="text-xs text-blue-600 mt-2">
              +180.1% from last month
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Products</p>
                <p className="text-2xl font-bold text-gray-900">+12,234</p>
              </div>
              <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center">
                <Package className="h-4 w-4 text-purple-600" />
              </div>
            </div>
            <p className="text-xs text-purple-600 mt-2">+19% from last month</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Active Users
                </p>
                <p className="text-2xl font-bold text-gray-900">+573</p>
              </div>
              <div className="h-8 w-8 bg-orange-100 rounded-full flex items-center justify-center">
                <Users className="h-4 w-4 text-orange-600" />
              </div>
            </div>
            <p className="text-xs text-orange-600 mt-2">+201 since last hour</p>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">
              Recent Orders
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[
                {
                  id: "#3210",
                  customer: "Olivia Martin",
                  status: "Completed",
                  amount: "$42.25",
                },
                {
                  id: "#3209",
                  customer: "Jackson Lee",
                  status: "Processing",
                  amount: "$74.99",
                },
                {
                  id: "#3208",
                  customer: "Isabella Nguyen",
                  status: "Completed",
                  amount: "$99.99",
                },
                {
                  id: "#3207",
                  customer: "William Kim",
                  status: "Pending",
                  amount: "$39.95",
                },
                {
                  id: "#3206",
                  customer: "Sofia Davis",
                  status: "Completed",
                  amount: "$19.99",
                },
              ].map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between py-2"
                >
                  <div className="flex items-center space-x-4">
                    <div className="font-medium text-gray-900">{order.id}</div>
                    <div className="text-gray-600">{order.customer}</div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        order.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : order.status === "Processing"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {order.status}
                    </span>
                    <div className="font-medium text-gray-900">
                      {order.amount}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
