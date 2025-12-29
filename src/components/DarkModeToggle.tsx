"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DarkModeToggle() {
  // Karena tema default kita sekarang Dark, kita mulai dengan true
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Sinkronisasi status saat pertama kali load
    // Kita cek apakah ada class 'light', jika tidak ada berarti kita di mode Dark (default)
    const isLight = document.documentElement.classList.contains("light");
    if (isLight) {
      setDarkMode(false);
    } else {
      // Pastikan class dark aktif di awal jika tidak ada preferensi
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDark = () => {
    if (darkMode) {
      // Pindah ke Mode Terang (Kalem)
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setDarkMode(false);
    } else {
      // Pindah ke Mode Gelap (Default)
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  };

  return (
    <button 
      onClick={toggleDark}
      // Border dan Shadow tetap menggunakan warna biru elektrik (#3B82F6) agar konsisten dengan gaya Tech
      className="fixed top-6 right-6 z-50 flex items-center gap-3 px-4 py-2 rounded-full bg-tech-card border border-[#3B82F6]/40 text-tech-text shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:border-[#3B82F6] transition-all duration-300 group overflow-hidden backdrop-blur-md"
    >
      {/* Label Teknis */}
      <span className="text-[10px] font-mono tracking-tighter uppercase opacity-70 group-hover:opacity-100">
        {darkMode ? "System.Theme(Dark)" : "System.Theme(Light)"}
      </span>

      {/* Animasi Ikon */}
      <div className="relative w-5 h-5 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {darkMode ? (
            <motion.span
              key="moon"
              initial={{ y: 15, opacity: 0, rotate: -45 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: -15, opacity: 0, rotate: 45 }}
              transition={{ duration: 0.25, ease: "backOut" }}
            >
              🌙
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ y: 15, opacity: 0, rotate: -45 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: -15, opacity: 0, rotate: 45 }}
              transition={{ duration: 0.25, ease: "backOut" }}
            >
              ☀️
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Efek Scanning Line (Tetap Dipertahankan) */}
      <div className="absolute inset-0 w-full h-[1px] bg-[#3B82F6]/30 top-0 animate-[scan_2s_linear_infinite] pointer-events-none"></div>
      
      {/* Overlay mengkilap halus saat hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3B82F6]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
    </button>
  );
}