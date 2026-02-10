"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export interface User {
  id: string
  name: string
  password: string
  role: "admin" | "user" | "superadmin"
  createdAt: string
}

export interface Item {
  id: string
  name: string
  description: string
  category: string
  quantity: number
  location: string
  latitude: number
  longitude: number
  status: "aktif" | "tidak_aktif"
  createdBy: string
  createdAt: string
  updatedAt: string
  maintenanceRecords?: any[]
  assetId?: string
  machineName?: string
  brand?: string
  model?: string
  serialNumber?: string
  assetTag?: string
  statusMesin?: string
  tingkatPrioritas?: string
  kondisiFisik?: string
  jamOperasional?: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (username: string, password: string) => Promise<void>
  logout: () => void
  items: Item[]
  addItem: (item: Omit<Item, "id" | "createdAt" | "updatedAt">) => void
  updateItem: (id: string, item: Partial<Item>) => void
  deleteItem: (id: string) => void
  users: User[]
  addUser: (user: Omit<User, "id" | "createdAt">) => void
  updateUser: (id: string, user: Partial<User>) => void
  deleteUser: (id: string) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [items, setItems] = useState<Item[]>([])
  const [users, setUsers] = useState<User[]>([])

  // Initialize from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser")
    const savedItems = localStorage.getItem("items")
    const savedUsers = localStorage.getItem("users")

    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    if (savedItems) {
      setItems(JSON.parse(savedItems))
    } else {
      const defaultItems: Item[] = [
        // Pentacity Items
        {
          id: "1",
          name: "Chiller 01",
          description: "Chiller utama Pentacity untuk pendinginan area mall utama.",
          category: "HVAC",
          quantity: 1,
          location: "Pentacity Mall - Lantai Dasar",
          latitude: -1.274373808475422,
          longitude: 116.85697235129511,
          status: "aktif",
          createdBy: "admin",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          assetId: "AC-CH-01",
          machineName: "Water Cooled Chiller",
          brand: "York",
          model: "YK Centrifugal",
          serialNumber: "YK-2023-001",
          assetTag: "AST-PENTA-HVAC-001",
          statusMesin: "Normal",
          tingkatPrioritas: "Critical",
          kondisiFisik: "Bagus",
          jamOperasional: "1250 Jam",
        },
        {
          id: "2",
          name: "Genset Utama",
          description: "Genset backup Pentacity kapasitas 2000 kVA.",
          category: "Power",
          quantity: 1,
          location: "Pentacity Mall - Basement",
          latitude: -1.274383808475422,
          longitude: 116.85698235129511,
          status: "aktif",
          createdBy: "admin",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          assetId: "PW-GN-01",
          machineName: "Diesel Generator Set",
          brand: "Caterpillar",
          model: "C175-16",
          serialNumber: "CAT-2022-552",
          assetTag: "AST-PENTA-PWR-001",
          statusMesin: "Standby",
          tingkatPrioritas: "High",
          kondisiFisik: "Bagus",
          jamOperasional: "150 Jam",
        },
        {
          id: "3",
          name: "Lift Penumpang 1",
          description: "Lift pengunjung utama area atrium.",
          category: "Transport",
          quantity: 1,
          location: "Pentacity Mall - Lt 1",
          latitude: -1.274363808475422,
          longitude: 116.85696235129511,
          status: "aktif",
          createdBy: "admin",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          assetId: "TR-LF-01",
          machineName: "Passenger Elevator",
          brand: "Schindler",
          model: "5500",
          serialNumber: "SCH-2023-112",
          assetTag: "AST-PENTA-TRN-001",
          statusMesin: "Normal",
          tingkatPrioritas: "High",
          kondisiFisik: "Bagus",
          jamOperasional: "3400 Jam",
        },
        {
          id: "4",
          name: "Pompa Transfer 1",
          description: "Pompa air bersih transfer ke roof tank.",
          category: "Plumbing",
          quantity: 1,
          location: "Pentacity Mall - Roof",
          latitude: -1.274393808475422,
          longitude: 116.85699235129511,
          status: "aktif",
          createdBy: "admin",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          assetId: "PL-PM-01",
          machineName: "Centrifugal Pump",
          brand: "Grundfos",
          model: "CR 45",
          serialNumber: "GRU-2023-882",
          assetTag: "AST-PENTA-PLB-001",
          statusMesin: "Normal",
          tingkatPrioritas: "Medium",
          kondisiFisik: "Sedang",
          jamOperasional: "5000 Jam",
        },
        {
          id: "5",
          name: "CCTV Lobby",
          description: "Kamera pengawas lobby utama view entrance.",
          category: "Security",
          quantity: 1,
          location: "Pentacity Mall - Lobby",
          latitude: -1.274353808475422,
          longitude: 116.85695235129511,
          status: "aktif",
          createdBy: "admin",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          assetId: "SC-CC-01",
          machineName: "IP Camera Dome",
          brand: "Hikvision",
          model: "DS-2CD2143G0-I",
          serialNumber: "HIK-2023-991",
          assetTag: "AST-PENTA-SEC-001",
          statusMesin: "Normal",
          tingkatPrioritas: "Medium",
          kondisiFisik: "Bagus",
          jamOperasional: "8760 Jam",
        },
        // Ewalk Items
        {
          id: "6",
          name: "Chiller 02",
          description: "Chiller utama Ewalk kapasitas 500 TR.",
          category: "HVAC",
          quantity: 1,
          location: "Ewalk Mall - Lantai Dasar",
          latitude: -1.273477250525186,
          longitude: 116.85904186348648,
          status: "aktif",
          createdBy: "admin",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          assetId: "AC-CH-02",
          machineName: "Air Cooled Chiller",
          brand: "Trane",
          model: "RTAF",
          serialNumber: "TRN-2021-443",
          assetTag: "AST-EWALK-HVAC-002",
          statusMesin: "Maintenance",
          tingkatPrioritas: "Critical",
          kondisiFisik: "Sedang",
          jamOperasional: "12000 Jam",
        },
        {
          id: "7",
          name: "Panel LVMDP",
          description: "Panel distribusi utama Ewalk supply tenant.",
          category: "Power",
          quantity: 1,
          location: "Ewalk Mall - Basement",
          latitude: -1.273487250525186,
          longitude: 116.85905186348648,
          status: "aktif",
          createdBy: "admin",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          assetId: "PW-PN-01",
          machineName: "Main Distribution Panel",
          brand: "Schneider",
          model: "Prisma iPM",
          serialNumber: "SCH-2020-112",
          assetTag: "AST-EWALK-PWR-001",
          statusMesin: "Normal",
          tingkatPrioritas: "Critical",
          kondisiFisik: "Bagus",
          jamOperasional: "24000 Jam",
        },
        {
          id: "8",
          name: "Escalator Lt. 1",
          description: "Eskalator naik ke Lt 1 area food court.",
          category: "Transport",
          quantity: 1,
          location: "Ewalk Mall - Lt Dasar",
          latitude: -1.273467250525186,
          longitude: 116.85903186348648,
          status: "aktif",
          createdBy: "admin",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          assetId: "TR-ES-01",
          machineName: "Escalator",
          brand: "Otis",
          model: "Link",
          serialNumber: "OT-2021-665",
          assetTag: "AST-EWALK-TRN-001",
          statusMesin: "Rusak",
          tingkatPrioritas: "High",
          kondisiFisik: "Buruk",
          jamOperasional: "15000 Jam",
        },
        {
          id: "9",
          name: "Hydrant Pump",
          description: "Pompa pemadam kebakaran electric main pump.",
          category: "Safety",
          quantity: 1,
          location: "Ewalk Mall - Pump Room",
          latitude: -1.273497250525186,
          longitude: 116.85906186348648,
          status: "aktif",
          createdBy: "admin",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          assetId: "SF-HP-01",
          machineName: "Fire Hydrant Pump",
          brand: "Ebara",
          model: "FSHA",
          serialNumber: "EBA-2022-331",
          assetTag: "AST-EWALK-SFT-001",
          statusMesin: "Standby",
          tingkatPrioritas: "Critical",
          kondisiFisik: "Bagus",
          jamOperasional: "50 Jam",
        },
        {
          id: "10",
          name: "Sound System",
          description: "Sistem audio atrium untuk event.",
          category: "Audio",
          quantity: 1,
          location: "Ewalk Mall - Atrium",
          latitude: -1.273457250525186,
          longitude: 116.85902186348648,
          status: "aktif",
          createdBy: "admin",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          assetId: "AU-SY-01",
          machineName: "PA System",
          brand: "TOA",
          model: "VX-2000",
          serialNumber: "TOA-2023-111",
          assetTag: "AST-EWALK-AUD-001",
          statusMesin: "Normal",
          tingkatPrioritas: "Low",
          kondisiFisik: "Bagus",
          jamOperasional: "2000 Jam",
        },
      ]
      setItems(defaultItems)
      localStorage.setItem("items", JSON.stringify(defaultItems))
    }
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers))
    } else {
      // Initialize with default users
      const defaultUsers: User[] = [
        {
          id: "1",
          name: "admin",
          password: "password",
          role: "admin",
          createdAt: new Date().toISOString(),
        },
        {
          id: "2",
          name: "superadmin",
          password: "password",
          role: "superadmin",
          createdAt: new Date().toISOString(),
        },
        {
          id: "3",
          name: "epi",
          password: "epi",
          role: "user",
          createdAt: new Date().toISOString(),
        },
      ]
      setUsers(defaultUsers)
      localStorage.setItem("users", JSON.stringify(defaultUsers))
    }
    setIsLoading(false)
  }, [])

  const login = async (username: string, password: string) => {
    // Simulate login - for demo purposes
    const foundUser = users.find((u) => u.name === username)
    if (foundUser && foundUser.password === password) {
      setUser(foundUser)
      localStorage.setItem("currentUser", JSON.stringify(foundUser))
    } else {
      throw new Error("Nama Pengguna atau Kata Sandi tidak valid")
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("currentUser")
  }

  const addItem = (itemData: Omit<Item, "id" | "createdAt" | "updatedAt">) => {
    const newItem: Item = {
      ...itemData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    const newItems = [...items, newItem]
    setItems(newItems)
    localStorage.setItem("items", JSON.stringify(newItems))
  }

  const updateItem = (id: string, itemData: Partial<Item>) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, ...itemData, updatedAt: new Date().toISOString() } : item,
    )
    setItems(newItems)
    localStorage.setItem("items", JSON.stringify(newItems))
  }

  const deleteItem = (id: string) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
    localStorage.setItem("items", JSON.stringify(newItems))
  }

  const addUser = (userData: Omit<User, "id" | "createdAt">) => {
    const newUser: User = {
      ...userData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    }
    const newUsers = [...users, newUser]
    setUsers(newUsers)
    localStorage.setItem("users", JSON.stringify(newUsers))
  }

  const updateUser = (id: string, userData: Partial<User>) => {
    const newUsers = users.map((u) => (u.id === id ? { ...u, ...userData } : u))
    setUsers(newUsers)
    localStorage.setItem("users", JSON.stringify(newUsers))
    if (user?.id === id) {
      const updatedUser = { ...user, ...userData }
      setUser(updatedUser)
      localStorage.setItem("currentUser", JSON.stringify(updatedUser))
    }
  }

  const deleteUser = (id: string) => {
    const newUsers = users.filter((u) => u.id !== id)
    setUsers(newUsers)
    localStorage.setItem("users", JSON.stringify(newUsers))
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        logout,
        items,
        addItem,
        updateItem,
        deleteItem,
        users,
        addUser,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}
