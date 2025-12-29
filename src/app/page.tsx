"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import Typewriter from "@/components/Typewriter";
import SkillMarquee from "@/components/SkillMarquee";
import ContactTerminal from "@/components/ContactTerminal";
import Contact from "@/components/Contact";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-tech-bg text-tech-text selection:bg-tech-primary/30 overflow-x-hidden">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="h-screen flex flex-col items-center justify-center font-mono relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="z-10 text-center px-4"
        >
          <div className="inline-block px-3 py-1 border border-tech-primary/30 rounded-md bg-tech-primary/10 text-tech-primary text-[10px] mb-6 tracking-widest uppercase">
            system.status == "active"
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-tech-primary to-tech-secondary leading-none">
            TABIA.DEV
          </h1>

          <p className="text-slate-400 max-w-lg mx-auto text-sm md:text-base mb-10 leading-relaxed font-mono">
            <Typewriter text="Executing Full-Stack solutions. Translating complex logic into seamless user experiences." />
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-tech-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              <span className="text-[10px] opacity-50 font-mono">01</span> View_Projects()
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.05, borderColor: "var(--tech-primary)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-tech-border text-tech-text px-8 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 group bg-tech-card/30"
            >
              <span className="text-[10px] opacity-50 font-mono">02</span> Contact.log()
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* --- 2. SKILL MARQUEE --- */}
      <div className="border-y border-tech-border/30 py-8 bg-tech-card/5">
        <SkillMarquee />
      </div>

      {/* --- 3. PROJECTS SECTION --- */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-32">
        <header className="flex items-center gap-4 mb-16 opacity-80">
          <span className="text-tech-primary font-mono text-sm">01</span>
          <h2 className="text-2xl font-bold tracking-widest uppercase font-mono">Main_Repository</h2>
          <div className="h-[1px] flex-1 bg-tech-border/30"></div>
        </header>

        <div className="space-y-40">
          {[
            {
              slug: "cermin-aksara-senja",
              category: "Generative AI",
              title: "Cermin Aksara Senja",
              description: "Cermin Aksara Senja AI Chatbot yang menjembatani logika mesin dengan kedalaman sastra. Dirancang untuk menerjemahkan input emosional menjadi bait puisi reflektif melalui antarmuka yang minimalis dan menenangkan.",
              tags: ["Generative AI", "LLM Integration", "Prompt Engineering", "Full-Stack AI"],
              image: "/projects/cermin-aksara-senja/1.png"
            },
            {
              slug: "alboy-store",
              category: "E-Commerce System",
              title: "Alboy Store",
              description: "Platform top-up game otomatis dengan integrasi payment gateway. Fokus pada skalabilitas transaksi dan UI yang intuitif bagi komunitas gaming.",
              tags: ["E-Commerce", "Payment Gateway", "Automation", "Transactional UI"],
              image: "/projects/alboy-store/1.png"
            },
            {
              slug: "azam-barber-recap",
              category: "Mobile Solution",
              title: "Azam Barber Recap",
              description: "Aplikasi manajemen keuangan barbershop berbasis mobile. Membantu pemilik bisnis memantau pendapatan harian secara real-time dengan penyimpanan lokal yang aman.",
              tags: ["Mobile Development", "Fintech Solution", "Offline-First", "Business Utility"],
              image: "/projects/azam-barber/1.jpg"
            },
            {
              slug: "senja-khatulistiwa",
              category: "Web System",
              title: "Senja Khatulistiwa",
              description: "Landing page premium untuk brand kopi lokal. Mengedepankan estetika visual 'Dark Mode' dan animasi halus menggunakan Framer Motion.",
              tags: ["Premium UI/UX", "Brand Identity", "Responsive Design", "Interaction Design"],
              image: "/projects/senja-khatulistiwa/1.png"
            }
          ].map((proj, index) => (
            <motion.div 
              key={proj.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Kolom Gambar */}
              <div className="w-full md:w-3/5 group relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-tech-primary to-tech-secondary rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur-xl"></div>
                  <ProjectCard 
                    slug={proj.slug}
                    category={proj.category}
                    title={proj.title}
                    description="" 
                    tags={[]} 
                    image={proj.image}
                  />
              </div>

              {/* Kolom Deskripsi */}
              <div className={`w-full md:w-2/5 flex flex-col space-y-6 ${
                index % 2 === 0 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'
              }`}>
                <div className="space-y-2">
                  <span className="text-tech-primary font-mono text-[10px] tracking-[0.3em] uppercase">
                    {proj.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tighter uppercase leading-none">
                    {proj.title}
                  </h3>
                </div>
                
                <p className="text-slate-500 leading-relaxed font-sans text-base md:text-lg">
                  {proj.description}
                </p>

                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {proj.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 border border-tech-border/50 text-[9px] font-mono text-slate-400 rounded-md uppercase tracking-widest bg-tech-card/30">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <Link 
                    href={`/projects/${proj.slug}`}
                    className="inline-flex items-center gap-3 text-tech-primary font-mono text-sm group"
                  >
                    {index % 2 === 0 && (
                      <span className="tracking-[0.2em] font-bold group-hover:translate-x-2 transition-transform duration-300">
                        {"<--"}
                      </span>
                    )}
                    
                    <span className="tracking-[0.2em] font-bold">EXPLORE_PROJECT</span>
                    
                    {index % 2 !== 0 && (
                      <span className="tracking-[0.2em] font-bold group-hover:-translate-x-2 transition-transform duration-300">
                        {"-->"}
                      </span>
                    )}
                  </Link>
                </div>
              </div>  
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 4. TECH STACK SECTION --- */}
<section className="max-w-6xl mx-auto px-6 py-32 border-t border-tech-border/20">
  <header className="flex items-center gap-4 mb-16 opacity-80">
    <span className="text-tech-secondary font-mono text-sm">02</span>
    <h2 className="text-2xl font-bold tracking-widest uppercase font-mono">Core_Engine</h2>
    <div className="h-[1px] flex-1 bg-tech-border/30"></div>
  </header>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono">
    
    {/* 1. AI & INTELLIGENCE */}
    <div className="p-8 border border-tech-border rounded-2xl bg-tech-card/10 hover:border-tech-primary/50 transition-all duration-300 group">
      <h3 className="text-tech-primary font-bold mb-6 text-[11px] tracking-[0.2em] uppercase">Artificial_Intelligence</h3>
      <ul className="space-y-4 text-[12px] opacity-70">
        <li className="flex justify-between border-b border-tech-border/30 pb-2"><span>Gemini Pro API</span> <span className="text-tech-primary">Applied</span></li>
        <li className="flex justify-between border-b border-tech-border/30 pb-2"><span>Prompt Eng.</span> <span className="text-tech-primary">Advanced</span></li>
        <li className="flex justify-between border-b border-tech-border/30 pb-2"><span>LLM Integration</span> <span className="text-tech-primary">Expert</span></li>
        <li className="flex justify-between border-b border-tech-border/30 pb-2"><span>Vercel AI SDK</span> <span className="text-tech-primary">Active</span></li>
        <li className="flex justify-between border-b border-tech-border/30 pb-2"><span>NLP Processing</span> <span className="text-tech-primary">Stable</span></li>
        <li className="flex justify-between border-b border-tech-border/30 pb-2"><span>Context Mgmt</span> <span className="text-tech-primary">Deep</span></li>
      </ul>
    </div>

    {/* 2. WEB ECOSYSTEM */}
    <div className="p-8 border border-tech-border rounded-2xl bg-tech-card/10 hover:border-tech-secondary/50 transition-all duration-300 group">
      <h3 className="text-tech-secondary font-bold mb-6 text-[11px] tracking-[0.2em] uppercase">Web_Development</h3>
      <ul className="space-y-4 text-[12px] opacity-70">
        <li className="flex justify-between border-b border-tech-border/30 pb-2"><span>Next.js 15</span> <span className="text-tech-secondary">Expert</span></li>
        <li className="flex justify-between border-b border-tech-border/30 pb-2"><span>TypeScript</span> <span className="text-tech-secondary">Strict</span></li>
        <li className="flex justify-between border-b border-tech-border/30 pb-2"><span>Tailwind CSS</span> <span className="text-tech-secondary">Fluid</span></li>
        <li className="flex justify-between border-b border-tech-border/30 pb-2"><span>Framer Motion</span> <span className="text-tech-secondary">Smooth</span></li>
        <li className="flex justify-between border-b border-tech-border/30 pb-2"><span>React Hooks</span> <span className="text-tech-secondary">Master</span></li>
        <li className="flex justify-between border-b border-tech-border/30 pb-2"><span>Responsive UI</span> <span className="text-tech-secondary">Pixel</span></li>
      </ul>
    </div>

    {/* 3. MOBILE & PERSISTENCE */}
    <div className="p-8 border border-tech-border rounded-2xl bg-tech-card/10 hover:border-white/30 transition-all duration-300 group">
      <h3 className="text-slate-400 font-bold mb-6 text-[11px] tracking-[0.2em] uppercase">Mobile_Solutions</h3>
      <ul className="space-y-4 text-[12px] opacity-70">
        <li className="flex justify-between border-b border-tech-border/30 pb-2"><span>Flutter / Dart</span> <span className="text-white">Stable</span></li>
        <li className="flex justify-between border-b border-tech-border/30 pb-2"><span>SQLite DB</span> <span className="text-white">Local</span></li>
        <li className="flex justify-between border-b border-tech-border/30 pb-2"><span>Material 3</span> <span className="text-white">Native</span></li>
        <li className="flex justify-between border-b border-tech-border/30 pb-2"><span>State Mgmt</span> <span className="text-white">Active</span></li>
        <li className="flex justify-between border-b border-tech-border/30 pb-2"><span>Clean Arch</span> <span className="text-white">Solid</span></li>
        <li className="flex justify-between border-b border-tech-border/30 pb-2"><span>Mobile UX</span> <span className="text-white">Smooth</span></li>
      </ul>
    </div>

    {/* 4. BACKEND & INFRA */}
    <div className="p-8 border border-tech-border rounded-2xl bg-tech-card/10 hover:border-tech-primary/50 transition-all duration-300 group">
      <h3 className="text-tech-primary font-bold mb-6 text-[11px] tracking-[0.2em] uppercase">Infrastructure</h3>
      <ul className="space-y-4 text-[12px] opacity-70">
        <li className="flex justify-between border-b border-tech-border/30 pb-2"><span>Node.js / API</span> <span className="text-tech-primary">Expert</span></li>
        <li className="flex justify-between border-b border-tech-border/30 pb-2"><span>MySQL</span> <span className="text-tech-primary">Optimized</span></li>        <li className="flex justify-between border-b border-tech-border/30 pb-2"><span>Payment GW</span> <span className="text-tech-primary">Active</span></li>
        <li className="flex justify-between border-b border-tech-border/30 pb-2"><span>Git / CI-CD</span> <span className="text-tech-primary">Ready</span></li>
        <li className="flex justify-between border-b border-tech-border/30 pb-2"><span>Firebase</span> <span className="text-tech-primary">Realtime</span></li>
        <li className="flex justify-between border-b border-tech-border/30 pb-2"><span>Linux Shell</span> <span className="text-tech-primary">Native</span></li>
      </ul>
    </div>

  </div>
</section>

      {/* --- 5. CONTACT PROTOCOL --- */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-32 border-t border-tech-border/20">
        <header className="flex items-center gap-4 mb-16 opacity-80">
          <span className="text-tech-primary font-mono text-sm">03</span>
          <h2 className="text-2xl font-bold tracking-widest uppercase font-mono">Contact_Protocol</h2>
          <div className="h-[1px] flex-1 bg-tech-border/30"></div>
        </header>
        
        <div className="space-y-12">
           <ContactTerminal />
           <Contact />
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 border-t border-tech-border/10 bg-tech-card/5 relative overflow-hidden">
        {/* Efek Glow di Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-tech-primary/50 to-transparent"></div>

        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          
          {/* Social Links Section */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {/* Instagram */}
            <a 
              href="https://instagram.com/tehaa017_" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 px-6 py-3 border border-tech-border/50 rounded-full bg-tech-bg hover:border-tech-secondary/50 transition-all duration-300 shadow-lg shadow-black/20"
            >
              <span className="w-2 h-2 rounded-full bg-tech-secondary animate-pulse"></span>
              <span className="text-xs font-mono text-slate-400 group-hover:text-tech-secondary transition-colors uppercase tracking-widest">Instagram</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-slate-600 group-hover:text-tech-secondary group-hover:rotate-12 transition-all">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/tabiahanural" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 px-6 py-3 border border-tech-border/50 rounded-full bg-tech-bg hover:border-tech-primary/50 transition-all duration-300 shadow-lg shadow-black/20"
            >
              <span className="w-2 h-2 rounded-full bg-tech-primary animate-pulse"></span>
              <span className="text-xs font-mono text-slate-400 group-hover:text-tech-primary transition-colors uppercase tracking-widest">LinkedIn</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-slate-600 group-hover:text-tech-primary group-hover:-rotate-12 transition-all">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>

          {/* Metadata & Status */}
          <div className="text-center space-y-4">
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em]">
              <p>© 2025 Tabia Hanural</p>
              <p className="hidden md:block text-tech-border/50">|</p>
              <p>Built with Next.js 15</p>
              <p className="hidden md:block text-tech-border/50">|</p>
              
              {/* Penanda Versi Awal */}
              <div className="flex items-center gap-2 bg-tech-primary/5 border border-tech-primary/20 px-2 py-0.5 rounded">
                <span className="w-1 h-1 rounded-full bg-tech-primary"></span>
                <span className="text-tech-primary/80">v1.0.0_Initial_Build</span>
              </div>
              
              <p className="hidden md:block text-tech-border/50">|</p>
              <p className="text-tech-primary/60">System_Status: 200_OK</p>
            </div>

            <p className="text-[9px] font-mono text-slate-600 opacity-40 tracking-[0.3em] uppercase">
              All_Threads_Completed // Deploying_Imagination_To_Production
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}