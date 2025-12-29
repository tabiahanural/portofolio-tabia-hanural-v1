"use client";
import { motion } from "framer-motion";

const skills = [
  // --- Languages ---
  "TypeScript", "JavaScript", "Dart", "Python", "HTML5", "CSS3",
  
  // --- Frameworks / Library ---
  "Next.js 15", "React", "Flutter", "TailwindCSS", "Framer Motion", "Vercel AI SDK",
  
  // --- AI & Logic ---
  "Gemini Pro API", "Prompt Engineering", "LLM Integration", "Generative AI",
  
  // --- Backend & Database ---
  "Node.js", "PostgreSQL", "SQLite", "Firebase", "Prisma", "REST API",
  
  // --- Tools & Roles ---
  "Git", "Docker", "Android Developer", "Web Developer", "Fullstack", "UI/UX Design"
];

export default function SkillMarquee() {
  return (
    <div className="relative py-10 overflow-hidden bg-tech-bg/50 border-y border-tech-border">
      {/* Efek Fade di pinggir kiri dan kanan agar terlihat smooth */}
      <div className="absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-tech-bg to-transparent"></div>
      <div className="absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-tech-bg to-transparent"></div>

      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }} // Berjalan setengah dari total lebar
        transition={{ 
          duration: 20, 
          ease: "linear", 
          repeat: Infinity 
        }}
      >
        {/* Render list dua kali agar loop tidak terputus */}
        {[...skills, ...skills].map((skill, index) => (
          <div 
            key={index} 
            className="flex items-center gap-4 px-8"
          >
            <span className="text-tech-primary font-mono text-xl opacity-20 group-hover:opacity-100 transition-opacity">
              {"</>"}
            </span>
            <span className="text-tech-text font-mono text-2xl font-bold tracking-tighter uppercase">
              {skill}
            </span>
            <span className="w-2 h-2 rounded-full bg-tech-secondary"></span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}