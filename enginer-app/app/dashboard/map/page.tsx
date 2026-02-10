"use client"

import DashboardLayout from "@/components/dashboard-layout"
import dynamic from "next/dynamic"

const DashboardItemsMap = dynamic(
    () => import("@/components/dashboard-items-map"),
    {
        ssr: false,
        loading: () => <div className="w-full h-[600px] bg-white rounded-3xl animate-pulse flex items-center justify-center text-slate-300 border border-slate-100">Loading Map...</div>
    }
)

export default function MapPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Lokasi Barang</h1>
                <p className="text-slate-500 mt-1">Pantau posisi real-time seluruh aset dan mesin Anda di satu peta interaktif.</p>
            </div>

            {/* The Map Component itself acts as the main "Card" */}
            <div className="min-h-[600px]">
                <DashboardItemsMap />
            </div>
        </div>
    )
}
