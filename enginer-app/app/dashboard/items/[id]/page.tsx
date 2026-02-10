"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { useAuth } from "@/context/auth-context"
import DashboardLayout from "@/components/dashboard-layout"
import ItemDetailView from "@/components/item-detail-view"

export default function ItemDetailPage() {
  const { user, isLoading, items } = useAuth()
  const router = useRouter()
  const params = useParams()
  const [item, setItem] = useState<any>(null)

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/")
      return
    }

    if (items && params.id) {
      const foundItem = items.find((i) => i.id === params.id)
      setItem(foundItem)
    }
  }, [user, isLoading, router, items, params.id])

  if (isLoading || !user) {
    return <div className="flex items-center justify-center min-h-screen bg-background" />
  }

  if (!item) {
    return (
      <DashboardLayout>
        <div className="text-center py-12">
          <p className="text-muted-foreground">Item tidak ditemukan</p>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <ItemDetailView item={item} />
    </DashboardLayout>
  )
}
