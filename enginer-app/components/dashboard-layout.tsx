"use client"

import React, { useState, useEffect } from "react"
import DashboardHeader from "@/components/dashboard-header"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])

  return (
    <div className={`min-h-screen bg-slate-50/50 transition-opacity duration-700 ${show ? 'opacity-100' : 'opacity-0'}`}>
      <DashboardHeader />

      {/* Main Content Area - padded to account for fixed header */}
      <div className="pt-24 pb-12 min-h-screen">
        <div className="container mx-auto px-6">
          {children}
        </div>
      </div>
    </div>
  )
}
