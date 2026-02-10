"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/auth-context"
import { Card, CardContent } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import dynamic from "next/dynamic"

const DashboardItemsMap = dynamic(
  () => import("@/components/dashboard-items-map"),
  {
    ssr: false,
    loading: () => <div className="w-full h-[500px] bg-white rounded-3xl animate-pulse flex items-center justify-center text-slate-300 border border-slate-100">Loading Map...</div>
  }
)

export default function DashboardPage() {
  const { user, isLoading, items, users } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/")
    }
  }, [user, isLoading, router])

  if (isLoading || !user) {
    return <div className="flex items-center justify-center min-h-screen bg-slate-50" />
  }

  // Data Calculations
  const totalItem = items.length
  const normalCount = items.filter((i) => i.statusMesin === "Normal").length
  const maintenanceCount = items.filter((i) => i.statusMesin === "Maintenance").length
  const rusakCount = items.filter((i) => i.statusMesin === "Rusak").length
  const standbyCount = items.filter((i) => i.statusMesin === "Standby").length

  const chartData = [
    { name: "Normal", value: normalCount },
    { name: "Maintenance", value: maintenanceCount },
    { name: "Rusak", value: rusakCount },
    { name: "Standby", value: standbyCount },
  ]
  // Indigo/Violet Palette
  const COLORS = ["#6366f1", "#8b5cf6", "#ec4899", "#a855f7"]

  const uniqueCategories = Array.from(new Set(items.map((i) => i.category))).length
  const uniqueLocations = Array.from(new Set(items.map((i) => i.location))).length

  const recentItems = [...items]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 5)

  return (
    <div className="space-y-8">
      {/* Hero Section - Soft Indigo Gradient */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-indigo-50 p-8 md:p-12 shadow-xl shadow-indigo-100/50 border border-white/50 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
        {/* Soft decorative blobs */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full bg-indigo-100/50 blur-3xl animate-pulse duration-1000"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-96 w-96 rounded-full bg-violet-100/50 blur-3xl animate-pulse duration-1000 delay-500"></div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-indigo-100 text-indigo-600 text-xs font-semibold mb-4 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-[ping_3s_linear_infinite] absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-30"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500 animate-[pulse_2s_ease-in-out_infinite]"></span>
              </span>
              System Online
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-2 tracking-tight">
              Selamat Datang, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">{user?.name.split(' ')[0]}</span>
            </h1>
            <p className="text-slate-500 text-lg max-w-xl">
              Dashboard monitoring aset Anda telah siap. Pantau kinerja dan aktivitas terbaru di sini.
            </p>
          </div>

          {/* Clock & Action - Flex Column on mobile, Row on desktop */}
          <div className="flex flex-col items-end gap-6">
            <DigitalClock />
            <button
              onClick={() => window.location.href = "/dashboard/items"}
              className="group flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-indigo-200 transition-all font-semibold"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 transition-transform group-hover:rotate-90">
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
              </svg>
              Tambah Aset
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid - Soft White & Indigo Accents */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <StatCard
          title="Total Aset"
          value={totalItem}
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>}
          color="bg-indigo-50 text-indigo-600"
          delay={0}
        />
        <StatCard
          title="Maintenance"
          value={maintenanceCount}
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.033a.262.262 0 00-.09-.392A3.223 3.223 0 0110.465 7.556a10.919 10.919 0 00-6.362 6.362c-.318.12-.677-.049-.774-.357a.263.263 0 01.078-.301l3.83-3.83a.887.887 0 111.256 1.256l-3.83 3.83a.262.262 0 01-.301.078 3.223 3.223 0 01-.986-2.583c.097-.318-.07-.676-.324-.784a10.884 10.884 0 00-6.362 6.362 3.224 3.224 0 012.35 1.671.266.266 0 00.392.09l3.033-2.496z" /></svg>}
          color="bg-violet-50 text-violet-600"
          delay={100}
        />
        <StatCard
          title="Kategori"
          value={uniqueCategories}
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" /></svg>}
          color="bg-purple-50 text-purple-600"
          delay={200}
        />
        <StatCard
          title="Lokasi Area"
          value={uniqueLocations}
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>}
          color="bg-fuchsia-50 text-fuchsia-600"
          delay={300}
        />
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Status Chart */}
        <Card className="rounded-3xl border-slate-100 shadow-xl shadow-slate-100/50 overflow-hidden bg-white">
          <div className="p-6 border-b border-slate-50">
            <h3 className="font-bold text-slate-800 text-lg">Distribusi Status</h3>
          </div>
          <CardContent className="p-6 flex flex-col items-center justify-center">
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    innerRadius={65}
                    outerRadius={85}
                    paddingAngle={5}
                    dataKey="value"
                    cornerRadius={6}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      borderRadius: '16px',
                      border: 'none',
                      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                      color: '#1e293b'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full mt-4">
              {chartData.map((item, index) => (
                <div key={item.name} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full ring-2 ring-white shadow-sm" style={{ backgroundColor: COLORS[index] }}></div>
                    <span className="text-xs font-medium text-slate-600">{item.name}</span>
                  </div>
                  <span className="font-bold text-slate-900">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="lg:col-span-2 rounded-3xl border-slate-100 shadow-xl shadow-slate-100/50 overflow-hidden bg-white">
          <div className="p-6 border-b border-slate-50 flex justify-between items-center">
            <h3 className="font-bold text-slate-800 text-lg">Aktivitas Terbaru</h3>
            <button className="text-indigo-600 text-sm font-semibold hover:text-indigo-800 hover:bg-indigo-50 px-3 py-1 rounded-lg transition-colors" onClick={() => router.push('/dashboard/items')}>
              Lihat Semua
            </button>
          </div>
          <CardContent className="p-0">
            <div className="divide-y divide-slate-50">
              {recentItems.map((item) => (
                <div key={item.id} className="p-5 hover:bg-slate-50/80 transition-all flex items-center gap-4 group">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105 ${item.statusMesin === "Normal" ? "bg-indigo-50 text-indigo-600" :
                    item.statusMesin === "Maintenance" ? "bg-violet-50 text-violet-600" :
                      item.statusMesin === "Rusak" ? "bg-pink-50 text-pink-600" :
                        "bg-slate-50 text-slate-600"
                    }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M10 2a6 6 0 00-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 00.515 1.076 32.91 32.91 0 003.256.508 8.688 8.688 0 001.5.09c1.5 0 2.97-.031 4.409-.09a32.91 32.91 0 003.256-.508.75.75 0 00.515-1.076A11.448 11.448 0 0116 8a6 6 0 00-6-6zM8.057 17.747a.75.75 0 00-.384.806 3.82 3.82 0 007.654 0 .75.75 0 00-.383-.806 8.954 8.954 0 01-1.258.934 3.86 3.86 0 00-4.372 0 9.028 9.028 0 01-1.257-.934z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h4 className="font-bold text-slate-800 text-sm truncate">{item.name}</h4>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 font-medium border border-slate-200">{item.assetId}</span>
                    </div>
                    <p className="text-xs text-slate-500 truncate">{item.description}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide inline-block shadow-sm ${item.statusMesin === "Normal" ? "bg-white text-indigo-600 border border-indigo-100" :
                      item.statusMesin === "Maintenance" ? "bg-white text-violet-600 border border-violet-100" :
                        item.statusMesin === "Rusak" ? "bg-white text-pink-600 border border-pink-100" :
                          "bg-white text-slate-600 border border-slate-200"
                      }`}>
                      {item.statusMesin}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1.5 font-medium">
                      {new Date(item.updatedAt).toLocaleDateString("id-ID", { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Map Section */}
      <div id="asset-map">
        <DashboardItemsMap />
      </div>
    </div>
  )
}

// Digital Clock Component
function DigitalClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="font-mono text-center md:text-right">
      <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-violet-600 tracking-tighter drop-shadow-sm">
        {time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })}
        <span className="text-2xl md:text-3xl text-indigo-400 font-bold ml-1 align-top">
          {time.getSeconds().toString().padStart(2, '0')}
        </span>
      </div>
      <div className="text-sm md:text-base font-medium text-slate-500 mt-1 uppercase tracking-widest">
        {time.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
      </div>
    </div>
  )
}

function CountUpAnimation({ end, duration = 2000 }: { end: number, duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration])

  return <span>{count}</span>
}

function StatCard({ title, value, icon, color, delay }: { title: string, value: number, icon: React.ReactNode, color: string, delay: number }) {
  return (
    <Card
      className={`border-0 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-500 rounded-3xl overflow-hidden bg-white group cursor-default transform hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3.5 rounded-2xl ${color} bg-opacity-50 transition-transform group-hover:scale-110 duration-500`}>
            {icon}
          </div>
          <div className="h-1.5 w-1.5 rounded-full bg-slate-200 group-hover:bg-indigo-400 transition-colors duration-500"></div>
        </div>
        <div>
          <h3 className="text-3xl font-black text-slate-800 tracking-tight mb-1">
            <CountUpAnimation end={value} />
          </h3>
          <p className="text-sm font-medium text-slate-400">{title}</p>
        </div>
      </CardContent>
    </Card>
  )
}
