"use client"

import { useState } from "react"
import Link from "next/link"
import { useAuth } from "@/context/auth-context"

interface ItemCardProps {
  item: any
  onDelete: () => void
}

export default function ItemCard({ item, onDelete }: ItemCardProps) {
  const { updateItem } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const categoryIcons: Record<string, string> = {
    elektronik: "Elektronik",
    furniture: "Furniture",
    alat: "Alat",
    lainnya: "Lainnya",
  }

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-border overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-1">{item.name}</h3>
            <p className="text-sm text-muted-foreground">{categoryIcons[item.category]}</p>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${item.statusMesin === "Normal" ? "bg-green-100 text-green-700" :
              item.statusMesin === "Maintenance" ? "bg-yellow-100 text-yellow-700" :
                item.statusMesin === "Rusak" ? "bg-red-100 text-red-700" :
                  item.statusMesin === "Standby" ? "bg-blue-100 text-blue-700" :
                    item.statusMesin === "Tidak Aktif" ? "bg-gray-100 text-gray-700" :
                      "bg-gray-100 text-gray-700"
              }`}
          >
            {item.statusMesin || "-"}
          </span>
        </div>

        <p className="text-sm text-foreground mb-4 line-clamp-2">{item.description}</p>

        <div className="space-y-2 mb-4 pb-4 border-b border-border">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Kuantitas:</span>
            <span className="font-semibold text-foreground">{item.quantity}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Lokasi:</span>
            <span className="font-semibold text-foreground">{item.location}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Link
            href={`/dashboard/items/${item.id}`}
            className="flex-1 text-center bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-2 rounded-lg hover:shadow-lg hover:shadow-indigo-200 transition-all font-semibold text-sm"
          >
            Lihat Detail
          </Link>
          <button
            onClick={() => setShowConfirm(true)}
            className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-semibold text-sm"
          >
            Hapus
          </button>
        </div>

        {showConfirm && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-700 mb-3">Yakin ingin menghapus item ini?</p>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  onDelete()
                  setShowConfirm(false)
                }}
                className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors font-semibold text-sm"
              >
                Hapus
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors font-semibold text-sm"
              >
                Batal
              </button>
            </div>
          </div>
        )}
      </div>
    </div >
  )
}
