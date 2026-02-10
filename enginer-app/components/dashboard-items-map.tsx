"use client"

import { useAuth } from "@/context/auth-context"
import { useMemo, useState, useRef, useEffect, useCallback } from "react"
import Map, { Marker, Popup, NavigationControl, FullscreenControl, Source, Layer, useMap } from "react-map-gl/maplibre"
import "maplibre-gl/dist/maplibre-gl.css"
import type { MapRef } from "react-map-gl/maplibre"
import maplibregl from "maplibre-gl"
import type { Feature, LineString } from "geojson"

export default function DashboardItemsMap() {
  const { items } = useAuth()
  const mapRef = useRef<MapRef>(null)
  const [popupInfo, setPopupInfo] = useState<any>(null)
  const [userLocation, setUserLocation] = useState<{ lat: number, lng: number } | null>(null)
  const [navTarget, setNavTarget] = useState<any | null>(null)
  const [routeEnd, setRouteEnd] = useState<{ lat: number, lng: number } | null>(null)

  const markers = useMemo(() => items.filter((i) => i.latitude && i.longitude), [items])

  // Initial View State (default POV)
  const initialViewState = useMemo(() => {
    return {
      longitude: 116.856972,
      latitude: -1.274373,
      zoom: 16,
      pitch: 50,
      bearing: -10,
    }
  }, [])

  // Get User Location
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
        },
        (error) => {
          console.error("Error getting location:", error)
          // Fallback location for demo (nearby mall entrance)
          setUserLocation({
            lat: -1.275000,
            lng: 116.856000
          })
        }
      )
    }
  }, [])

  // Route Animation Logic
  useEffect(() => {
    if (!userLocation || !navTarget) {
      setRouteEnd(null)
      return
    }

    let start: number | null = null
    const duration = 3000 // 3 seconds

    const animate = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)

      // Interpolate coordinate
      const currentLat = userLocation.lat + (navTarget.latitude - userLocation.lat) * progress
      const currentLng = userLocation.lng + (navTarget.longitude - userLocation.lng) * progress

      setRouteEnd({ lat: currentLat, lng: currentLng })

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [navTarget, userLocation])

  // Route GeoJSON
  const routeData = useMemo(() => {
    if (!userLocation || !routeEnd) return null
    return {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: [
          [userLocation.lng, userLocation.lat],
          [routeEnd.lng, routeEnd.lat]
        ]
      }
    } as Feature<LineString>
  }, [userLocation, routeEnd])

  const handleStopNavigation = () => {
    setNavTarget(null)
    setRouteEnd(null)
    // Reset view to initial state
    if (mapRef.current) {
      mapRef.current.flyTo({
        ...initialViewState,
        duration: 2000
      })
    }
  }

  // Handle "Navigate Here" click
  const handleNavigate = (target: any) => {
    if (!userLocation) {
      alert("Menunggu lokasi pengguna...")
      return
    }
    setNavTarget(target)
    setPopupInfo(null)

    // Fly to fit bounds
    if (mapRef.current) {
      const bounds = new maplibregl.LngLatBounds()
        .extend([userLocation.lng, userLocation.lat])
        .extend([target.longitude, target.latitude])

      mapRef.current.fitBounds(bounds, {
        padding: 100,
        duration: 2000
      })
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden mt-8">
      <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
        <div>
          <h2 className="text-xl font-bold text-[#1E293B]">Peta Sebaran Aset (3D View)</h2>
          <p className="text-slate-500 text-sm mt-1">
            {navTarget ? "Navigasi aktif..." : "Gunakan klik kanan + drag untuk memutar peta."}
          </p>
        </div>
        <div className="flex gap-4 text-xs font-medium">
          {!navTarget && (
            <>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Normal
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span> Maintenance
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span> Critical
              </div>
            </>
          )}
        </div>
      </div>

      <div className="w-full h-[500px] relative">
        <Map
          ref={mapRef}
          initialViewState={initialViewState}
          style={{ width: "100%", height: "100%" }}
          mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
          attributionControl={false}
        >
          <NavigationControl position="top-right" />
          <FullscreenControl position="top-right" />

          {/* Route Source & Layer */}
          {routeData && (
            <Source id="route-source" type="geojson" data={routeData}>
              {/* Background Line (Halo) */}
              <Layer
                id="route-halo"
                type="line"
                paint={{
                  'line-color': '#ffffff',
                  'line-width': 6,
                  'line-opacity': 0.8
                }}
              />
              {/* Animated Foreground Line */}
              <Layer
                id="route-anim"
                type="line"
                layout={{ 'line-join': 'round', 'line-cap': 'round' }}
                paint={{
                  'line-color': '#6366f1',
                  'line-width': 4,
                  'line-dasharray': [1, 2],
                }}
              />
            </Source>
          )}

          {/* User Location Marker */}
          {userLocation && (
            <Marker longitude={userLocation.lng} latitude={userLocation.lat}>
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-500/30 rounded-full animate-ping"></div>
                <div className="relative w-4 h-4 bg-blue-500 border-2 border-white rounded-full shadow-md"></div>
              </div>
            </Marker>
          )}

          {markers.map((item) => (
            <Marker
              key={item.id}
              longitude={item.longitude}
              latitude={item.latitude}
              anchor="bottom"
              onClick={(e) => {
                e.originalEvent.stopPropagation()
                setPopupInfo(item)
              }}
            >
              <div
                className={`group relative cursor-pointer transform transition-transform hover:scale-110 ${popupInfo?.id === item.id ? "scale-125 z-10" : "z-0"
                  }`}
              >
                {/* Ping Animation */}
                <div
                  className={`absolute -inset-2 rounded-full opacity-30 animate-ping ${item.statusMesin === "Rusak" || item.tingkatPrioritas === "Critical"
                    ? "bg-red-500"
                    : item.statusMesin === "Maintenance"
                      ? "bg-orange-500"
                      : "bg-emerald-500"
                    }`}
                />

                {/* Marker Body */}
                <div
                  className={`relative w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center ${item.statusMesin === "Rusak" || item.tingkatPrioritas === "Critical"
                    ? "bg-red-500"
                    : item.statusMesin === "Maintenance"
                      ? "bg-orange-500"
                      : "bg-emerald-500"
                    }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {/* Stem for "floating" effect in 3D */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-4 bg-slate-400/50"></div>
                <div className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-2 h-1 bg-black/20 rounded-full blur-[1px]"></div>
              </div>
            </Marker>
          ))}

          {navTarget && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
              <button
                onClick={handleStopNavigation}
                className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg shadow-red-600/30 transition-all font-bold text-sm hover:scale-105 active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
                Stop Navigasi
              </button>
            </div>
          )}

          {popupInfo && (
            <Popup
              anchor="top"
              longitude={popupInfo.longitude}
              latitude={popupInfo.latitude}
              onClose={() => setPopupInfo(null)}
              closeButton={false}
              className="custom-map-popup"
              maxWidth="240px"
              offset={10}
            >
              <div className="p-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {popupInfo.assetId || "NO ID"}
                  </span>
                  <button
                    onClick={() => setPopupInfo(null)}
                    className="text-slate-400 hover:text-slate-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                  </button>
                </div>

                <h3 className="font-bold text-slate-800 text-sm mb-1">{popupInfo.name}</h3>
                <p className="text-xs text-slate-500 mb-3 truncate">{popupInfo.location}</p>

                <button
                  onClick={() => handleNavigate(popupInfo)}
                  className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold py-2 rounded-lg transition-colors shadow-sm mb-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.625a19.055 19.055 0 005.335 2.308z" clipRule="evenodd" />
                  </svg>
                  Arahkan ke Sini
                </button>

                <a
                  href={`/dashboard/items/${popupInfo.id}`}
                  className="block w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold py-2 rounded-lg transition-colors"
                >
                  Lihat Detail
                </a>
              </div>
            </Popup>
          )}
        </Map>
      </div>
    </div>
  )
}
