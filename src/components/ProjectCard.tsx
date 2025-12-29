"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface ProjectProps {
  slug: string;
  title: string;
  category: string;
  description?: string; // Dibuat opsional
  image: string;
  tags?: string[];     // Dibuat opsional
}

export default function ProjectCard({ slug, title, category, description, image, tags }: ProjectProps) {
  // Cek apakah card ini hanya untuk visual (digunakan di zigzag layout)
  const isVisualOnly = !description && (!tags || tags.length === 0);

  return (
    <Link href={`/projects/${slug}`} className="block h-full group">
      <motion.div 
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="relative h-full bg-tech-card/20 border border-tech-border/50 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-tech-primary/50 transition-all duration-500 shadow-2xl"
      >
        {/* --- Header Ala Browser / Code Editor --- */}
        <div className="bg-tech-border/20 px-4 py-3 flex justify-between items-center border-b border-tech-border/50">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] opacity-50 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <span className="text-[9px] font-mono text-slate-500 tracking-[0.2em] uppercase">
            {category}
          </span>
        </div>

        {/* --- Image Preview --- */}
        <div className={`relative w-full overflow-hidden ${isVisualOnly ? 'aspect-video' : 'aspect-[16/10]'}`}>
          <Image 
            src={image} 
            alt={title}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay gradient agar gambar menyatu dengan card */}
          <div className="absolute inset-0 bg-gradient-to-t from-tech-bg/60 to-transparent opacity-60" />
          
          {/* Label "View Details" yang muncul saat hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-tech-primary/10 backdrop-blur-[2px]">
             <span className="px-4 py-2 bg-tech-primary text-white text-[10px] font-mono font-bold rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]">
               OPEN_PROJECT.EXE
             </span>
          </div>
        </div>

        {/* --- Content (Hanya muncul jika description/tags ada) --- */}
        {!isVisualOnly && (
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-bold text-white group-hover:text-tech-primary transition-colors">
              {title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
              {description}
            </p>
            
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-[9px] font-mono text-tech-secondary px-2 py-0.5 rounded border border-tech-secondary/20 bg-tech-secondary/5 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </motion.div>
    </Link>
  );
}