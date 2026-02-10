"use client"

import { useMemo, useRef, useState } from "react"
import Map, { Marker, NavigationControl, FullscreenControl } from "react-map-gl/maplibre"
import "maplibre-gl/dist/maplibre-gl.css"
import type { MapRef } from "react-map-gl/maplibre"

interface ItemDetailMapProps {
    item: {
        id: string
        latitude: number
        longitude: number
        statusMesin?: string
        name: string
        location?: string
    }
}

export default function ItemDetailMap({ item }: ItemDetailMapProps) {
    const mapRef = useRef<MapRef>(null)

    const initialViewState = useMemo(() => {
        return {
            longitude: item.longitude,
            latitude: item.latitude,
            zoom: 17,
            pitch: 50,
            bearing: -10,
        }
    }, [item])

    const [isFullscreen, setIsFullscreen] = useState(false)

    return (
        <div className={`relative w-full h-full rounded-xl overflow-hidden shadow-lg border border-slate-200 transition-all duration-500 ${isFullscreen ? "fixed inset-0 z-50 rounded-none" : "min-h-[300px]"}`}>
            <Map
                ref={mapRef}
                initialViewState={initialViewState}
                style={{ width: "100%", height: "100%" }}
                mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
                attributionControl={false}
            >
                <NavigationControl position="top-right" />
                <FullscreenControl position="top-right" />

                {/* Marker Item Specific */}
                <Marker
                    longitude={item.longitude}
                    latitude={item.latitude}
                    anchor="bottom"
                >
                    <div className="relative group cursor-pointer">
                        {/* Ping Animation */}
                        <div
                            className={`absolute -inset-4 rounded-full opacity-30 animate-ping ${item.statusMesin === "Rusak"
                                    ? "bg-red-500"
                                    : item.statusMesin === "Maintenance"
                                        ? "bg-orange-500"
                                        : "bg-emerald-500"
                                }`}
                        />

                        {/* Marker Body */}
                        <div
                            className={`relative w-10 h-10 rounded-full border-4 border-white shadow-xl flex items-center justify-center transform transition-transform group-hover:scale-110 ${item.statusMesin === "Rusak"
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
                                className="w-5 h-5 text-white"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>

                        {/* Stem for 3D effect */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-6 bg-slate-400/60"></div>
                        <div className="absolute top-[calc(100%+24px)] left-1/2 -translate-x-1/2 w-4 h-2 bg-black/20 rounded-full blur-[2px]"></div>

                        {/* Tooltip */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-lg text-xs font-bold text-slate-700 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            {item.name}
                        </div>
                    </div>
                </Marker>
            </Map>

            {/* Map Overlay Info */}
            <div className="absolute bottom-4 left-4 right-14 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-white/40 shadow-lg text-xs">
                <div className="flex items-center gap-2 mb-1">
                    <div className="bg-slate-100 p-1 rounded-md text-slate-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                            <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.625a19.055 19.055 0 005.335 2.308z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <span className="font-semibold text-slate-700 line-clamp-1">{item.location || "Lokasi tidak diketahui"}</span>
                </div>
                <div className="flex gap-2 text-[10px] text-slate-500 font-mono pl-6">
                    <span>{item.latitude.toFixed(6)}</span>
                    <span>{item.longitude.toFixed(6)}</span>
                </div>
            </div>
        </div>
    )
}
