"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactTerminal() {
  const [status, setStatus] = useState("idle"); // idle, sending, success

  const simulateSend = () => {
    setStatus("sending");
    
    // Data Email
    const email = "tabiarema@gmail.com";
    const subject = "Collaboration Query";
    const body = "Halo Tabia, saya melihat portofolio Anda dan tertarik untuk berdiskusi lebih lanjut.";

    // Link Khusus Gmail Web
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      setStatus("success");
      
      // Membuka Gmail di tab baru setelah simulasi loading selesai
      setTimeout(() => {
        window.open(gmailUrl, "_blank");
      }, 500); // Jeda sedikit setelah status sukses muncul agar lebih natural
    }, 2000);
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto px-4 py-24">
      <div className="bg-[#0B0E14] border border-tech-border rounded-lg overflow-hidden shadow-2xl font-mono text-sm">
        {/* Terminal Header */}
        <div className="bg-tech-card px-4 py-2 border-b border-tech-border flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          <span className="text-xs opacity-50 uppercase tracking-widest">bash — contact.sh</span>
        </div>

        {/* Terminal Body */}
        <div className="p-6 space-y-4">
          <div className="flex gap-2">
            <span className="text-tech-primary">tabia@dev:~$</span>
            <span className="text-tech-text">sudo init contact_protocol --verbose</span>
          </div>

          <div className="text-slate-500 italic">
            {">"} Initializing secure connection...<br />
            {">"} Status: <span className="text-green-500 font-bold">READY</span>
          </div>

          {status === "idle" && (
            <div className="pt-4">
              <p className="mb-4 text-tech-text">Tertarik untuk kolaborasi atau sekadar bertanya?</p>
              <button 
                onClick={simulateSend}
                className="bg-tech-primary/10 border border-tech-primary text-tech-primary px-6 py-2 rounded hover:bg-tech-primary hover:text-white transition-all"
              >
                Execute: send_message()
              </button>
            </div>
          )}

          {status === "sending" && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="text-yellow-500"
            >
              [PROCESS]: Compiling request...<br />
              [PROCESS]: Encrypting message data...<br />
              <motion.span 
                animate={{ opacity: [1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.5 }}
              >
                _
              </motion.span>
            </motion.div>
          )}

          {status === "success" && (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }}
              className="text-green-500 border border-green-500/30 bg-green-500/5 p-4 rounded"
            >
              [SUCCESS]: Email client triggered successfully.<br />
              [INFO]: Silakan lanjutkan pesan Anda di aplikasi email.
            </motion.div>
          )}
          {/* Manual Backup Info */}
          <div className="pt-6 border-t border-tech-border/30">
            <p className="text-slate-500 text-[10px] font-mono opacity-50">
              // manual_backup: <span className="text-tech-secondary selection:bg-tech-secondary/30">tabiarema@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}