"use client"

import DashboardLayout from "@/components/dashboard-layout"
import ItemsGrid from "@/components/items-grid"

export default function ItemsManagementPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
      <ItemsGrid />
    </div>
  )
}