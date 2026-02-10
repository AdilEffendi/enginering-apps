"use client"
import React, { useState, useMemo } from "react"
import { useAuth } from "@/context/auth-context"
import { useRouter } from "next/navigation"
import { format } from "date-fns"

// Helper for consistent date formatting
const formatDate = (dateString: string | undefined) => {
  if (!dateString) return "-"
  try {
    return format(new Date(dateString), 'dd-MM-yy')
  } catch (e) {
    return dateString
  }
}

export default function MaintenancePage() {
  const { items, users, updateItem } = useAuth()
  const router = useRouter()

  // State for Modals
  const [isReportOpen, setIsReportOpen] = useState(false)

  // State for Resolve Modal
  const [isResolveOpen, setIsResolveOpen] = useState(false)
  const [selectedItemForResolve, setSelectedItemForResolve] = useState<any>(null)

  // Filtered Logic for Active Issues
  const activeIssues = useMemo(() => {
    return items.filter(item => ["Maintenance", "Rusak"].includes(item.statusMesin))
  }, [items])

  // Aggregated History Logic
  const maintenanceHistory = useMemo(() => {
    const allRecords: any[] = []
    items.forEach(item => {
      if (item.maintenanceRecords && item.maintenanceRecords.length > 0) {
        item.maintenanceRecords.forEach((rec: any, idx: number) => {
          allRecords.push({
            ...rec,
            itemId: item.id,
            itemName: item.name,
            assetId: item.assetId,
            id: `${item.id}-${idx}`, // Virtual ID for key
            originalIdx: idx
          })
        })
      }
    })
    // Sort by date (newest first)
    return allRecords.sort((a, b) => new Date(b.tanggalKerusakan).getTime() - new Date(a.tanggalKerusakan).getTime())
  }, [items])

  const [searchTerm, setSearchTerm] = useState("")
  const filteredHistory = maintenanceHistory.filter(rec =>
    (rec.itemName || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
    (rec.tindakan || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
    (rec.teknisi || "").toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleResolveIssue = (item: any) => {
    setSelectedItemForResolve(item)
    setIsResolveOpen(true)
  }

  const handleDeleteRecord = (recordId: string, itemId: string, originalIdx: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus riwayat perbaikan ini?")) {
      const item = items.find(i => i.id === itemId)
      if (item && item.maintenanceRecords) {
        const newRecords = [...item.maintenanceRecords]
        newRecords.splice(originalIdx, 1) // Remove specific record
        updateItem(itemId, { maintenanceRecords: newRecords })
      }
    }
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Pusat Perbaikan</h1>
          <p className="text-slate-500 mt-1">Monitor kerusakan aktif dan riwayat perbaikan aset.</p>
        </div>
        <button
          onClick={() => setIsReportOpen(true)}
          className="group flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 text-white px-5 py-2.5 rounded-xl hover:shadow-lg hover:shadow-red-200 transition-all font-semibold active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
          </svg>
          Lapor Kerusakan Baru
        </button>
      </div>

      {/* Active Issues Section */}
      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          Sedang Dalam Perbaikan ({activeIssues.length})
        </h2>

        {activeIssues.length === 0 ? (
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 text-center">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="font-semibold text-emerald-800">Semua sistem berjalan normal!</p>
            <p className="text-emerald-600 text-sm">Tidak ada item yang sedang dalam status Rusak atau Maintenance.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeIssues.map(item => (
              <div key={item.id} className="bg-white border border-red-100 shadow-xl shadow-red-50 rounded-2xl p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4">
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ${item.statusMesin === 'Rusak' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'}`}>
                    {item.statusMesin}
                  </span>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-xl font-bold text-slate-600">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 cursor-pointer hover:text-indigo-600 transition-colors" onClick={() => router.push(`/dashboard/items/${item.id}`)}>{item.name}</h3>
                    <p className="text-xs text-slate-500 font-mono">{item.assetId || "No ID"}</p>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                        <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.625a19.055 19.055 0 005.335 2.308z" clipRule="evenodd" />
                      </svg>
                      {item.location}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {item.maintenanceRecords && item.maintenanceRecords.length > 0 ? (
                    <div className="text-sm bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <p className="text-xs text-slate-400 font-bold uppercase mb-1">Issue Terakhir</p>
                      <p className="text-slate-700 line-clamp-2">{item.maintenanceRecords[item.maintenanceRecords.length - 1].penyebab}</p>
                    </div>
                  ) : (
                    <div className="text-sm text-slate-400 italic">Belum ada catatan detail.</div>
                  )}
                </div>

                <button
                  onClick={() => handleResolveIssue(item)}
                  className="w-full py-2 bg-white border border-slate-200 text-slate-600 font-semibold rounded-xl hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-all text-sm flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  Selesaikan Maintenance
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* History Section */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-xl font-bold text-slate-800">Riwayat Perbaikan Lengkap</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Cari riwayat..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full sm:w-64"
            />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 absolute left-3 top-3 text-slate-400">
              <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-100">
              <tr>
                <th className="px-6 py-4">Tanggal Lapor</th>
                <th className="px-6 py-4">Item</th>
                <th className="px-6 py-4">Masalah Awal</th>
                <th className="px-6 py-4">Perbaikan</th>
                <th className="px-6 py-4">Kondisi Akhir</th>
                <th className="px-6 py-4">Teknisi</th>
                <th className="px-6 py-4">Selesai</th>
                <th className="px-6 py-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredHistory.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-8 text-center text-slate-500 italic">
                    Belum ada data riwayat yang cocok.
                  </td>
                </tr>
              ) : (
                filteredHistory.map((rec) => (
                  <tr key={rec.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4 font-mono text-slate-600">{formatDate(rec.tanggalKerusakan)}</td>
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-800">{rec.itemName}</div>
                      <div className="text-xs text-slate-400">{rec.assetId}</div>
                    </td>
                    <td className="px-6 py-4 text-slate-700 max-w-xs truncate" title={rec.penyebab}>{rec.penyebab}</td>
                    <td className="px-6 py-4 text-slate-700 max-w-xs truncate" title={rec.tindakan}>{rec.tindakan || "-"}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${rec.kondisiAkhir === "Normal" ? "bg-emerald-100 text-emerald-700" :
                        rec.kondisiAkhir === "Standby" ? "bg-blue-100 text-blue-700" :
                          rec.kondisiAkhir === "Rusak" ? "bg-red-100 text-red-700" :
                            "bg-slate-100 text-slate-700"
                        }`}>
                        {rec.kondisiAkhir || "-"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium">
                        {users.find(u => u.id === rec.teknisi)?.name || rec.teknisi || "-"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-500">{formatDate(rec.tanggalSelesai)}</td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => handleDeleteRecord(rec.id, rec.itemId, rec.originalIdx)}
                        className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Hapus Riwayat"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Report Modal */}
      {isReportOpen && (
        <ReportModal
          items={items}
          users={users}
          onClose={() => setIsReportOpen(false)}
          onSubmit={(data) => {
            const item = items.find(i => i.id === data.itemId);
            if (item) {
              const newRecords = [...(item.maintenanceRecords || []), data.record];
              // Update item: Add record AND set status based on form selection
              updateItem(item.id, {
                maintenanceRecords: newRecords,
                statusMesin: data.newStatus // Use status from form
              });
            }
            setIsReportOpen(false)
          }}
        />
      )}

      {/* Resolve Modal */}
      {isResolveOpen && selectedItemForResolve && (
        <ResolveModal
          item={selectedItemForResolve}
          users={users}
          onClose={() => setIsResolveOpen(false)}
          onSubmit={(resolveData: any) => {
            // Logic to update item
            // 1. Get existing records
            const records = [...(selectedItemForResolve.maintenanceRecords || [])];

            // 2. Update the LAST record (active one) with resolution details
            if (records.length > 0) {
              const lastIdx = records.length - 1;
              records[lastIdx] = {
                ...records[lastIdx],
                tindakan: resolveData.tindakan,
                kondisiAkhir: resolveData.kondisiAkhir, // Added this field
                teknisi: resolveData.teknisi,
                tanggalSelesai: resolveData.tanggalSelesai
              };
            } else {
              // Fallback: If no previous records exist (e.g. legacy data), create a new one
              records.push({
                tanggalKerusakan: new Date().toISOString().split('T')[0], // Assume today if unknown
                penyebab: "Kerusakan tanpa detail awal", // Placeholder
                tindakan: resolveData.tindakan,
                kondisiAkhir: resolveData.kondisiAkhir,
                teknisi: resolveData.teknisi,
                tanggalSelesai: resolveData.tanggalSelesai
              })
            }

            // 3. Update Item Status and Records
            updateItem(selectedItemForResolve.id, {
              statusMesin: resolveData.kondisiAkhir,
              maintenanceRecords: records
            });

            setIsResolveOpen(false)
          }}
        />
      )}

    </div>
  )
}

// Resolve Modal Component
function ResolveModal({ item, users, onClose, onSubmit }: { item: any, users: any[], onClose: () => void, onSubmit: (data: any) => void }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    tindakan: "",
    kondisiAkhir: "Normal", // Default to normal
    teknisi: "",
    tanggalSelesai: new Date().toISOString().split('T')[0]
  });

  const lastIssue = item.maintenanceRecords && item.maintenanceRecords.length > 0
    ? item.maintenanceRecords[item.maintenanceRecords.length - 1]
    : { penyebab: "Tidak ada data", tanggalKerusakan: null };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Normal": return "bg-emerald-100 text-emerald-700";
      case "Standby": return "bg-blue-100 text-blue-700";
      case "Rusak": return "bg-red-100 text-red-700";
      case "Maintenance": return "bg-orange-100 text-orange-700";
      default: return "bg-slate-100 text-slate-700";
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h3 className="font-bold text-lg text-slate-800">
            {step === 1 ? "Detail Barang & Masalah" : step === 2 ? "Form Perbaikan" : "Konfirmasi Penyelesaian"}
          </h3>
          <button onClick={onClose} className="p-1 hover:bg-slate-200 rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-slate-500">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {/* Progress Indicator */}
          <div className="flex items-center gap-2 mb-6 justify-center">
            {[1, 2, 3].map(s => (
              <div key={s} className={`h-2 rounded-full transition-all duration-300 ${s <= step ? 'w-8 bg-indigo-600' : 'w-2 bg-slate-200'}`} />
            ))}
          </div>

          {step === 1 && (
            <div className="space-y-6">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg border border-slate-100 flex items-center justify-center text-xl font-bold text-slate-600 shadow-sm">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">{item.name}</h4>
                    <p className="text-sm text-slate-500 font-mono">{item.assetId}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-slate-500">Lokasi:</span>
                      <span className="text-xs font-semibold text-slate-700">{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h5 className="text-sm font-bold text-slate-500 uppercase">Keluhan / Masalah Awal</h5>
                <div className="p-4 bg-orange-50 border border-orange-100 rounded-xl text-orange-900">
                  <p className="font-medium text-lg leading-relaxed">{lastIssue.penyebab}</p>
                  <p className="text-xs text-orange-600 mt-2 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                      <path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clipRule="evenodd" />
                    </svg>
                    Dilaporkan: {formatDate(lastIssue.tanggalKerusakan)}
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-blue-600 shrink-0 mt-0.5">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-blue-800">
                  Pastikan Anda sudah memeriksa barang secara fisik sebelum melanjutkan ke form perbaikan.
                </p>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Perbaikan yang Dilakukan</label>
                <textarea
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  placeholder="Jelaskan detail perbaikan, sparepart yang diganti, dll..."
                  rows={4}
                  value={formData.tindakan}
                  onChange={e => setFormData({ ...formData, tindakan: e.target.value })}
                  autoFocus
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Kondisi Akhir Barang</label>
                  <select
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                    value={formData.kondisiAkhir}
                    onChange={e => setFormData({ ...formData, kondisiAkhir: e.target.value })}
                  >
                    <option value="Normal">Normal (Siap Pakai)</option>
                    <option value="Standby">Standby (Cadangan)</option>
                    <option value="Rusak">Rusak (Belum Berhasil)</option>
                    <option value="Maintenance">Maintenance (Masih Perlu dicek)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Teknisi</label>
                  <select
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                    value={formData.teknisi}
                    onChange={e => setFormData({ ...formData, teknisi: e.target.value })}
                  >
                    <option value="">-- Pilih --</option>
                    {users.map((u: any) => (
                      <option key={u.id} value={u.id}>{u.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Tanggal Selesai</label>
                <input
                  type="date"
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                  value={formData.tanggalSelesai}
                  onChange={e => setFormData({ ...formData, tanggalSelesai: e.target.value })}
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <h4 className="text-xl font-bold text-slate-800">Konfirmasi Penyelesaian</h4>
              <p className="text-slate-500">Pastikan data berikut sudah benar sebelum menyimpan laporan ini.</p>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-500 text-sm">Status Baru:</span>
                  <span className={`px-2 py-0.5 rounded text-xs font-bold ${getStatusColor(formData.kondisiAkhir)}`}>
                    {formData.kondisiAkhir}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 text-sm">Teknisi:</span>
                  <span className="font-semibold text-slate-700 text-sm">{users.find(u => u.id === formData.teknisi)?.name || formData.teknisi || "-"}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-sm block mb-1">Tindakan Perbaikan:</span>
                  <p className="text-slate-800 font-medium text-sm bg-white p-2 border border-slate-100 rounded-lg">
                    {formData.tindakan}
                  </p>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 text-sm">Tanggal Selesai:</span>
                  <span className="font-semibold text-slate-700 text-sm">{formatDate(formData.tanggalSelesai)}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 flex justify-end gap-3 bg-slate-50">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 text-slate-600 hover:bg-slate-200 rounded-lg transition-colors font-semibold"
            >
              Kembali
            </button>
          )}

          {step < 3 ? (
            <button
              onClick={() => setStep(step + 1)}
              disabled={step === 2 && (!formData.tindakan || !formData.teknisi)}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold"
            >
              Lanjut
            </button>
          ) : (
            <button
              onClick={() => onSubmit(formData)}
              className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold shadow-lg shadow-emerald-200"
            >
              Simpan & Selesai
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

// Report Modal Component
function ReportModal({ items, users, onClose, onSubmit }: { items: any[], users: any[], onClose: () => void, onSubmit: (data: any) => void }) {
  const [step, setStep] = useState(1);
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [itemSearch, setItemSearch] = useState(""); // Added search state

  const [formData, setFormData] = useState({
    tanggalKerusakan: new Date().toISOString().split('T')[0],
    penyebab: "",
    tindakan: "Investigasi awal",
    teknisi: "",
    statusAwal: "Maintenance", // New field for initial Status change
    foto: "", // New field for photo
  });

  const selectedItemData = items.find(i => i.id === selectedItem);

  // Filter items based on search
  const filteredItems = items.filter((i: any) =>
    i.name.toLowerCase().includes(itemSearch.toLowerCase()) ||
    (i.assetId || "").toLowerCase().includes(itemSearch.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">

        {/* Header */}
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h3 className="font-bold text-lg text-slate-800">
            {step === 1 ? "Pilih Aset Bermasalah" : step === 2 ? "Detail Laporan" : "Konfirmasi Laporan"}
          </h3>
          <button onClick={onClose} className="p-1 hover:bg-slate-200 rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-slate-500">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">

          {/* Progress Indicator */}
          <div className="flex items-center gap-2 mb-6 justify-center">
            {[1, 2, 3].map(s => (
              <div key={s} className={`h-2 rounded-full transition-all duration-300 ${s <= step ? 'w-8 bg-red-600' : 'w-2 bg-slate-200'}`} />
            ))}
          </div>

          {step === 1 ? (
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
                <p className="text-sm text-slate-500 mb-2">Silakan pilih aset yang ingin dilaporkan kerusakannya.</p>
              </div>

              <div className="relative">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-500 uppercase block">Daftar Aset</label>
                  <input
                    type="text"
                    placeholder="Cari aset..."
                    className="text-xs p-1 px-2 border border-slate-200 rounded-md focus:ring-1 focus:ring-indigo-500 outline-none"
                    value={itemSearch}
                    onChange={(e) => setItemSearch(e.target.value)}
                  />
                </div>

                <div className="max-h-64 overflow-y-auto border border-slate-200 rounded-xl">
                  {filteredItems.length === 0 ? (
                    <div className="p-4 text-center text-sm text-slate-400">Aset tidak ditemukan.</div>
                  ) : (
                    filteredItems.map((item: any) => (
                      <div
                        key={item.id}
                        onClick={() => setSelectedItem(item.id)}
                        className={`p-3 border-b border-slate-100 last:border-0 cursor-pointer transition-colors flex items-center justify-between group ${selectedItem === item.id ? 'bg-indigo-50 border-indigo-200' : 'hover:bg-slate-50'}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${selectedItem === item.id ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                            {item.name.charAt(0)}
                          </div>
                          <div>
                            <div className={`font-semibold text-sm ${selectedItem === item.id ? 'text-indigo-900' : 'text-slate-700'}`}>{item.name}</div>
                            <div className="text-xs text-slate-400 font-mono">{item.assetId} • {item.location}</div>
                          </div>
                        </div>
                        {selectedItem === item.id && (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-indigo-600">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          ) : step === 2 ? (
            <div className="space-y-4">
              {/* Selected Item Summary */}
              <div className="bg-indigo-50 p-3 rounded-xl border border-indigo-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-lg font-bold text-indigo-600 border border-indigo-100">
                    {selectedItemData?.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-indigo-900 text-sm">{selectedItemData?.name}</p>
                    <p className="text-xs text-indigo-600">{selectedItemData?.assetId}</p>
                  </div>
                </div>
                <button onClick={() => setStep(1)} className="text-xs text-indigo-500 underline font-semibold hover:text-indigo-700">Ubah</button>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Judul / Penyebab Masalah</label>
                <input
                  type="text"
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                  placeholder="Contoh: Mesin mati total, Bunyi bising..."
                  value={formData.penyebab}
                  onChange={e => setFormData({ ...formData, penyebab: e.target.value })}
                  autoFocus
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Tanggal Kejadian</label>
                  <input
                    type="date"
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                    value={formData.tanggalKerusakan}
                    onChange={e => setFormData({ ...formData, tanggalKerusakan: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Status Barang (Wajib)</label>
                  <select
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                    value={formData.statusAwal}
                    onChange={e => setFormData({ ...formData, statusAwal: e.target.value })}
                  >
                    <option value="Maintenance">Maintenance</option>
                    <option value="Rusak">Rusak</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Upload Foto (Opsional)</label>
                <div className="relative border-2 border-dashed border-slate-300 rounded-xl p-4 text-center hover:bg-slate-50 transition-colors">
                  <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setFormData({ ...formData, foto: file.name }); // Store filename only for demo
                      }
                    }}
                  />
                  {formData.foto ? (
                    <div className="flex items-center justify-center gap-2 text-indigo-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M1 5.25A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25v9.5A2.25 2.25 0 0116.75 17H3.25A2.25 2.25 0 011 14.75v-9.5zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-2.69l-2.22-2.219a.75.75 0 00-1.06 0l-1.91 1.909.47.47a.75.75 0 11-1.06 1.06L6.53 8.091a.75.75 0 00-1.06 0l-2.97 2.97zM12 7a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold text-sm">{formData.foto}</span>
                    </div>
                  ) : (
                    <div className="text-slate-400">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto mb-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                      <span className="text-sm">Klik untuk upload foto</span>
                    </div>
                  )}
                </div>
              </div>

            </div>
          ) : (
            // Step 3: Confirmation
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>

              <h4 className="text-xl font-bold text-slate-800">Konfirmasi Pelaporan</h4>
              <p className="text-slate-500 text-sm">Apakah Anda yakin data berikut sudah benar?</p>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                  <span className="text-slate-500 text-sm">Aset:</span>
                  <span className="font-bold text-slate-700 text-sm">{selectedItemData?.name}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-sm block mb-1">Masalah:</span>
                  <p className="text-red-600 font-bold text-md break-words">
                    {formData.penyebab}
                  </p>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 text-sm">Ubah Status Jadi:</span>
                  <span className="px-2 py-0.5 rounded text-xs font-bold bg-red-100 text-red-700">
                    {formData.statusAwal}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 text-sm">Tanggal:</span>
                  <span className="text-slate-700 text-sm font-medium">{formatDate(formData.tanggalKerusakan)}</span>
                </div>
                {formData.foto && (
                  <div className="flex justify-between">
                    <span className="text-slate-500 text-sm">Foto:</span>
                    <span className="text-slate-700 text-sm font-medium italic">{formData.foto}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 flex justify-end gap-3 bg-slate-50">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 text-slate-600 hover:bg-slate-200 rounded-lg transition-colors font-semibold"
            >
              Kembali
            </button>
          )}
          {step < 3 ? (
            <button
              disabled={step === 1 ? !selectedItem : !formData.penyebab}
              onClick={() => setStep(step + 1)}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold"
            >
              Lanjut
            </button>
          ) : (
            <button
              onClick={() => onSubmit({ itemId: selectedItem, record: formData, newStatus: formData.statusAwal })}
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold shadow-lg shadow-red-200"
            >
              Kirim Laporan
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
