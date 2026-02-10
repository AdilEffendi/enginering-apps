"use client"

import type React from "react"

import { useState } from "react"
import { useAuth } from "@/context/auth-context"

interface ItemFormProps {
  onClose: () => void
  editingItem?: any
  onUpdate?: (id: string, data: any) => void
}

export default function ItemForm({ onClose, editingItem, onUpdate }: ItemFormProps) {
  const { addItem, user } = useAuth()
  const [formData, setFormData] = useState({
    assetId: editingItem?.assetId || "",
    name: editingItem?.name || "",
    machineName: editingItem?.machineName || "",
    category: editingItem?.category || "Mesin",
    brand: editingItem?.brand || "",
    model: editingItem?.model || "",
    serialNumber: editingItem?.serialNumber || "",
    assetTag: editingItem?.assetTag || "",
    quantity: editingItem?.quantity || 1,
    location: editingItem?.location || "",
    description: editingItem?.description || "",
    latitude: editingItem?.latitude || -6.2088,
    longitude: editingItem?.longitude || 106.8456,
    statusMesin: editingItem?.statusMesin || "Normal",
    tingkatPrioritas: editingItem?.tingkatPrioritas || "Medium",
    kondisiFisik: editingItem?.kondisiFisik || "Bagus",
    jamOperasional: editingItem?.jamOperasional || "",
    photos: editingItem?.photos || [],
  })

  // Handler upload foto
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    const newPhotos: string[] = []
    Array.from(files).forEach((file) => {
      const reader = new FileReader()
      reader.onload = (ev) => {
        if (ev.target?.result) {
          setFormData((prev) => ({
            ...prev,
            photos: [...prev.photos, ev.target.result as string],
          }))
        }
      }
      reader.readAsDataURL(file)
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingItem && onUpdate) {
      onUpdate(editingItem.id, formData)
    } else {
      addItem({
        ...formData,
        createdBy: user?.id || "",
        quantity: Number.parseInt(formData.quantity.toString()),
        latitude: Number.parseFloat(formData.latitude.toString()),
        longitude: Number.parseFloat(formData.longitude.toString()),
      })
    }

    onClose()
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-border">
      <h3 className="text-xl font-bold text-foreground mb-6">{editingItem ? "Edit Item" : "Form Tambah Item"}</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Identitas Item */}
        <h2 className="text-lg font-bold text-foreground mb-2">Identitas Item</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b pb-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">ID Barang / Kode Aset</label>
            <input
              type="text"
              value={formData.assetId}
              onChange={(e) => setFormData({ ...formData, assetId: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Nama Barang / Nama Mesin</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Nama Mesin (Opsional)</label>
            <input
              type="text"
              value={formData.machineName}
              onChange={(e) => setFormData({ ...formData, machineName: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Kategori</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="Mesin">Mesin</option>
              <option value="Tools">Tools</option>
              <option value="Elektronik">Elektronik</option>
              <option value="Safety Equipment">Safety Equipment</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Brand / Merk</label>
            <input
              type="text"
              value={formData.brand}
              onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Model / Tipe</label>
            <input
              type="text"
              value={formData.model}
              onChange={(e) => setFormData({ ...formData, model: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Nomor Seri (Serial Number)</label>
            <input
              type="text"
              value={formData.serialNumber}
              onChange={(e) => setFormData({ ...formData, serialNumber: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Nomor Inventaris / Asset Tag</label>
            <input
              type="text"
              value={formData.assetTag}
              onChange={(e) => setFormData({ ...formData, assetTag: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Kuantitas</label>
            <input
              type="number"
              value={formData.quantity === undefined || Number.isNaN(formData.quantity) ? "" : formData.quantity}
              onChange={(e) => {
                const value = e.target.value;
                setFormData({
                  ...formData,
                  quantity: value === "" ? "" : Number.parseInt(value)
                });
              }}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              min="1"
            />
          </div>
        </div>

        {/* Upload Foto */}
        <h2 className="text-lg font-bold text-foreground mb-2">Foto Item</h2>
        <div className="mb-4">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handlePhotoUpload}
            className="block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
          />
          {formData.photos.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.photos.map((photo, idx) => (
                <img
                  key={idx}
                  src={photo}
                  alt={`Foto ${idx + 1}`}
                  className="w-20 h-20 object-cover rounded-lg border border-border"
                />
              ))}
            </div>
          )}
        </div>

        {/* Kondisi Item */}
        <h2 className="text-lg font-bold text-foreground mb-2">Kondisi Item</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Status Mesin</label>
            <select
              value={formData.statusMesin}
              onChange={(e) => setFormData({ ...formData, statusMesin: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="Normal">Normal</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Rusak">Rusak</option>
              <option value="Tidak Aktif">Tidak Aktif</option>
              <option value="Standby">Standby</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Tingkat Prioritas</label>
            <select
              value={formData.tingkatPrioritas}
              onChange={(e) => setFormData({ ...formData, tingkatPrioritas: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Kondisi Fisik</label>
            <select
              value={formData.kondisiFisik}
              onChange={(e) => setFormData({ ...formData, kondisiFisik: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="Bagus">Bagus</option>
              <option value="Sedang">Sedang</option>
              <option value="Buruk">Buruk</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Jam Operasional Total (opsional)</label>
            <input
              type="number"
              value={formData.jamOperasional}
              onChange={(e) => setFormData({ ...formData, jamOperasional: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              min="0"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Lokasi</label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Deskripsi</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Latitude</label>
            <input
              type="number"
              value={formData.latitude}
              onChange={(e) => setFormData({ ...formData, latitude: Number.parseFloat(e.target.value) })}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              step="0.0001"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Longitude</label>
            <input
              type="number"
              value={formData.longitude}
              onChange={(e) => setFormData({ ...formData, longitude: Number.parseFloat(e.target.value) })}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              step="0.0001"
            />
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="flex-1 bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-2 rounded-lg hover:shadow-lg hover:shadow-indigo-200 transition-all font-semibold"
          >
            {editingItem ? "Perbarui" : "Simpan"}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 bg-muted text-foreground py-2 rounded-lg hover:bg-muted/80 transition-colors font-semibold"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  )
}
