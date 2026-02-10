"use client"

import { useRouter } from "next/navigation"
import { useAuth } from "@/context/auth-context"
import { useState } from "react"
import ItemForm from "./item-form"
import ItemDetailMap from "./item-detail-map"

// Modal zoom foto
function PhotoModal({ src, onClose }: { src: string, onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose}>
      <img
        src={src}
        alt="Zoom Foto"
        className="max-w-[95vw] max-h-[95vh] rounded-xl shadow-2xl border-2 border-white/20"
        onClick={e => e.stopPropagation()}
      />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  )
}

interface ItemDetailViewProps {
  item: any
}

export default function ItemDetailView({ item }: ItemDetailViewProps) {
  const router = useRouter()
  const { updateItem, users } = useAuth()

  // Helper untuk ambil nama user pembuat item
  const getCreatorName = (userId: string) => {
    const creator = users.find((u) => u.id === userId)
    return creator?.name || "Tidak diketahui"
  }

  const [isEditing, setIsEditing] = useState(false)

  const handleUpdate = (id: string, data: any) => {
    updateItem(id, data)
    setIsEditing(false)
  }

  const [zoomPhoto, setZoomPhoto] = useState<string | null>(null)

  // Status Badge Helper
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Normal": return "bg-emerald-50 text-emerald-600 border-emerald-100 ring-emerald-500/20";
      case "Maintenance": return "bg-orange-50 text-orange-600 border-orange-100 ring-orange-500/20";
      case "Rusak": return "bg-red-50 text-red-600 border-red-100 ring-red-500/20";
      case "Standby": return "bg-blue-50 text-blue-600 border-blue-100 ring-blue-500/20";
      default: return "bg-slate-50 text-slate-600 border-slate-100 ring-slate-500/20";
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical": return "text-red-600 bg-red-50 border-red-100";
      case "High": return "text-orange-600 bg-orange-50 border-orange-100";
      case "Medium": return "text-yellow-600 bg-yellow-50 border-yellow-100";
      case "Low": return "text-emerald-600 bg-emerald-50 border-emerald-100";
      default: return "text-slate-600 bg-slate-50 border-slate-100";
    }
  }

  if (isEditing) {
    return (
      <div className="max-w-7xl mx-auto space-y-6 pb-20">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">Edit {item.name}</h1>
            <p className="text-slate-500">Perbarui informasi item ini.</p>
          </div>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-xl hover:bg-slate-50 transition-all font-semibold flex items-center gap-2 shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clipRule="evenodd" />
              <path d="M4.25 4.25a.75.75 0 00-1.06 1.06L10 10.61l6.81-5.32a.75.75 0 10-1.06-1.06L10 8.49 4.25 4.25z" /> {/* Just a placeholder icon, actually wanted 'X' logic but visually Cancel */}
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clipRule="evenodd" />
            </svg>
            Batal Edit
          </button>
        </div>
        <ItemForm editingItem={item} onUpdate={handleUpdate} onClose={() => setIsEditing(false)} />
      </div>
    )
  }

  return (
    <div className="max-w-full mx-auto space-y-4 pb-12">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/50 backdrop-blur-xl border border-white/20 p-4 rounded-2xl sticky top-20 z-30 shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors"
            title="Kembali"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
            </svg>
          </button>
          <div>
            <h1 className="text-2xl font-black text-slate-800 tracking-tight leading-none">{item.name}</h1>
            <div className="flex items-center gap-2 mt-1 text-sm text-slate-500 font-mono">
              <span>{item.assetId || "NO ID"}</span>
              <span className="text-slate-300">•</span>
              <span>{item.category}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ring-1 ring-inset ${getStatusColor(item.statusMesin)}`}>
            {item.statusMesin || "Unknown"}
          </span>
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-xl hover:bg-slate-800 hover:shadow-lg transition-all font-semibold active:scale-95 text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
              <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
            </svg>
            Edit Item
          </button>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-12 gap-6">

        {/* Left Column: Photos & Primary Stats (3 Spans) */}
        <div className="col-span-12 lg:col-span-3 space-y-6">
          {/* Photo Card */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <div className="aspect-square bg-slate-50 rounded-xl overflow-hidden mb-3 relative group">
              {item.photos && item.photos.length > 0 ? (
                <img
                  src={item.photos[0]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                  onClick={() => setZoomPhoto(item.photos[0])}
                  alt="Main Item Photo"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-slate-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
              )}
              {item.photos && item.photos.length > 0 && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                  <span className="bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">Klik untuk zoom</span>
                </div>
              )}
            </div>
            {item.photos && item.photos.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {item.photos.slice(1, 5).map((photo: string, idx: number) => (
                  <div key={idx} className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-indigo-500 transition-all" onClick={() => setZoomPhoto(photo)}>
                    <img src={photo} className="w-full h-full object-cover" alt={`Gallery ${idx}`} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Actions / Stats */}
          <div className="bg-slate-900 text-white p-5 rounded-2xl shadow-xl shadow-slate-200">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-xs text-slate-300 uppercase tracking-wider font-bold mb-1">Kuantitas</div>
                <div className="text-2xl font-black">{item.quantity}</div>
                <div className="text-[10px] text-slate-400">Unit tersedia</div>
              </div>
              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-xs text-slate-300 uppercase tracking-wider font-bold mb-1">Total Jam</div>
                <div className="text-1xl font-black truncate">{item.jamOperasional || "0"}</div>
                <div className="text-[10px] text-slate-400">Jam Operasi</div>
              </div>
            </div>
          </div>
        </div>

        {/* Center Column: Detailed Specs (5 Spans) */}
        <div className="col-span-12 lg:col-span-5 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-50 bg-slate-50/50 flex items-center justify-between">
              <h3 className="font-bold text-slate-800">Spesifikasi Teknis</h3>
              <span className="text-xs font-semibold text-slate-400 bg-white border border-slate-200 px-2 py-1 rounded-md">Detail Aset</span>
            </div>
            <div className="p-0">
              <table className="w-full text-sm text-left">
                <tbody className="divide-y divide-slate-50">
                  {[
                    { l: "Nama Mesin", v: item.machineName },
                    { l: "Brand / Merk", v: item.brand },
                    { l: "Model / Tipe", v: item.model },
                    { l: "Serial Number", v: item.serialNumber, mono: true },
                    { l: "Asset Tag", v: item.assetTag, mono: true },
                    { l: "Tahun Perolehan", v: item.acquisitionYear || "-" }, // Assuming this might exist or just placeholder
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-3.5 text-slate-500 font-medium w-1/3">{row.l}</td>
                      <td className={`px-6 py-3.5 text-slate-800 font-semibold ${row.mono ? 'font-mono text-xs' : ''}`}>{row.v || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-50 bg-slate-50/50 flex items-center justify-between">
              <h3 className="font-bold text-slate-800">Kondisi & Status</h3>
            </div>
            <div className="p-6 grid grid-cols-2 gap-y-6 gap-x-4">
              <div>
                <div className="text-xs text-slate-400 font-bold uppercase mb-1.5">Priotitas</div>
                <span className={`px-2.5 py-1 rounded-md text-xs font-bold border ${getPriorityColor(item.tingkatPrioritas)}`}>
                  {item.tingkatPrioritas || "Unset"}
                </span>
              </div>
              <div>
                <div className="text-xs text-slate-400 font-bold uppercase mb-1.5">Kondisi Fisik</div>
                <div className="font-semibold text-slate-700 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${item.kondisiFisik === 'Bagus' ? 'bg-emerald-500' : item.kondisiFisik === 'Sedang' ? 'bg-yellow-500' : 'bg-red-500'}`}></span>
                  {item.kondisiFisik || "-"}
                </div>
              </div>
              <div className="col-span-2">
                <div className="text-xs text-slate-400 font-bold uppercase mb-1.5">Deskripsi / Catatan</div>
                <div className="text-sm text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100 min-h-[80px]">
                  {item.description || "Tidak ada deskripsi tambahan."}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Location & History (4 Spans) */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {/* Map Card */}
          <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100 h-[320px] lg:h-[400px]">
            <ItemDetailMap item={item} />
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="px-5 py-3 border-b border-slate-50 bg-slate-50/50">
              <h3 className="font-bold text-slate-800 text-sm">Informasi Penyimpanan</h3>
            </div>
            <div className="p-5 space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-indigo-50 text-indigo-600 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.625a19.055 19.055 0 005.335 2.308z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase">Lokasi Saat Ini</div>
                  <div className="font-semibold text-slate-800">{item.location}</div>
                </div>
              </div>

              <div className="border-t border-slate-50 pt-3 flex items-start gap-3">
                <div className="bg-slate-100 text-slate-500 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="w-full">
                  <div className="flex justify-between items-center mb-1">
                    <div className="text-xs text-slate-400 font-bold uppercase">Terakhir Diupdate</div>
                    <div className="text-[10px] text-slate-400">{new Date(item.updatedAt).toLocaleTimeString()}</div>
                  </div>
                  <div className="font-semibold text-slate-800 text-sm">
                    {new Date(item.updatedAt).toLocaleDateString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Oleh: <span className="font-medium text-indigo-600">{getCreatorName(item.createdBy)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {zoomPhoto && <PhotoModal src={zoomPhoto} onClose={() => setZoomPhoto(null)} />}
    </div>
  )
}
