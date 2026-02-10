"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/auth-context"
import DashboardLayout from "@/components/dashboard-layout"
import UsersManagement from "@/components/users-management"

export default function UsersPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/")
      return
    }

    if (user && user.role !== "admin" && user.role !== "superadmin") {
      router.push("/dashboard")
    }
  }, [user, isLoading, router])

  if (isLoading || !user) {
    return <div className="flex items-center justify-center min-h-screen bg-background" />
  }

  return (
    <DashboardLayout>
      <UsersManagement />
    </DashboardLayout>
  )
}
