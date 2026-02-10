"use client"

import { useAuth } from "@/context/auth-context"
import DashboardLayout from "@/components/dashboard-layout"

export default function DashboardHome() {
  const { user } = useAuth()

  return (
    <DashboardLayout>
      <div className="py-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Selamat Datang di Dashboard</h1>
        <p className="text-lg text-muted-foreground mb-2">
          Halo, <span className="font-semibold">{user?.name || "Pengguna"}</span>!
        </p>
        <p className="text-muted-foreground">
          Silakan pilih menu di samping untuk mengelola item atau pengguna.
        </p>
      </div>
    </DashboardLayout>
  )
}
