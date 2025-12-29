"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0); // Menambahkan state progress

  useEffect(() => {
    // 1. Kunci scroll saat loading dimulai
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    const timer = setTimeout(() => {
      setIsVisible(false);
      // 2. PAKSA scroll terbuka kembali tepat saat isVisible jadi false
      document.body.style.overflow = "auto";
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      // 3. Cadangan: Pastikan scroll terbuka jika komponen hancur (unmount)
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.2 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0B0E14]"
    >
      <div className="font-mono text-[#3B82F6] w-64">
        <div className="flex justify-between mb-2 text-xs">
          <span className="animate-pulse">Fetching_projects...</span>
          <span>{progress}%</span>
        </div>
        
        {/* Progress Bar Container */}
        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-[#3B82F6] to-[#A855F7]"
          />
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-[10px] text-slate-500 uppercase tracking-widest"
        >
          $ npm install --global tabia-expertise
        </motion.p>
      </div>
    </motion.div>
  );
}