"use client"

import type React from "react"

import { useState } from "react"
import { useAuth } from "@/context/auth-context"

export default function UsersManagement() {
  const { users, addUser, deleteUser } = useAuth()
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    role: "user" as "admin" | "user" | "superadmin",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addUser({
      name: formData.name,
      password: formData.password,
      role: formData.role,
    })
    setFormData({ name: "", password: "", role: "user" })
    setShowForm(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Manajemen Pengguna</h1>
          <p className="text-muted-foreground">Total {users.length} pengguna terdaftar</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
        >
          {showForm ? "Tutup Form" : "Tambah Pengguna"}
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-xl shadow-lg p-6 border border-border">
          <h3 className="text-xl font-bold text-foreground mb-6">Tambah Pengguna Baru</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Nama Pengguna</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Kata Sandi</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Role</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value as any })}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="superadmin">Superadmin</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Tambah Pengguna
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="flex-1 bg-muted text-foreground py-2 rounded-lg hover:bg-muted/80 transition-colors font-semibold"
              >
                Batal
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-lg border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Nama Pengguna</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Role</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Bergabung</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-foreground">{user.name}</td>
                  <td className="px-6 py-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">
                    {new Date(user.createdAt).toLocaleDateString("id-ID")}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => {
                        if (confirm("Yakin ingin menghapus pengguna ini?")) {
                          deleteUser(user.id)
                        }
                      }}
                      className="text-red-600 hover:text-red-700 transition-colors font-semibold text-sm"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
