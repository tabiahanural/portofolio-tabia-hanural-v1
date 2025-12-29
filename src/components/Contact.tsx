"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "tabiarema@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 border-t border-tech-border/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-tech-primary font-mono text-sm mb-4 tracking-[0.3em]">
          {"//"} INITIATE_CONTACT
        </h2>
        <p className="text-slate-400 mb-8 font-sans">
          Tertarik untuk kolaborasi atau sekadar tanya-tanya? <br/>
          Klik perintah di bawah untuk menyalin email saya.
        </p>

        <motion.div 
          onClick={copyToClipboard}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative inline-flex items-center gap-4 bg-tech-card border border-tech-border p-4 px-8 rounded-xl cursor-pointer hover:border-tech-primary/50 transition-all group"
        >
          <span className="text-tech-primary font-mono text-lg">$</span>
          <span className="text-tech-text font-mono text-lg tracking-tight">
            copy_email --target tabia.hanural
          </span>
          
          {/* Status Tooltip */}
          {copied && (
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] text-green-500 font-mono uppercase"
            >
              [ SUCCESS: Email_Copied_to_Buffer ]
            </motion.span>
          )}

          <div className="absolute inset-0 bg-tech-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
        </motion.div>
      </div>
    </section>
  );
}