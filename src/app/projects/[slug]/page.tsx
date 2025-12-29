"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function ProjectDetail() {
  const { slug } = useParams();

  // Data Konten Project
  const allProjects: any = {
    "cermin-aksara-senja": {
      title: "Cermin Aksara Senja",
      insight: "Membangun jembatan antara teknologi AI dan seni sastra. Proyek ini menggunakan model bahasa besar untuk menghasilkan respon puitis yang memberikan ketenangan bagi pengguna melalui antarmuka yang minimalis dan reflektif.",
      stack: ["Google Gemini Pro API", "Next.js 15", "Tailwind CSS", "Vercel AI SDK", "Framer Motion", "LLM-Based Tools"],
      images: [
        { id: 1, src: "/projects/cermin-aksara-senja/1.png", label: "Minimalist Onboarding Interface" },
        { id: 2, src: "/projects/cermin-aksara-senja/2.png", label: "Poetic AI Response Flow" }
      ]
    },
    "alboy-store": {
      title: "Alboy Store",
      insight: "Membangun platform top up game otomatis yang fokus pada kecepatan transaksi dan kepercayaan pengguna. Implementasi fitur mencakup sistem monitoring status server secara real-time, integrasi multi-payment gateway, dan pembuatan struk transaksi digital otomatis untuk meningkatkan user experience dalam ekosistem gaming.",
      stack: ["HTML5", "Tailwind CSS", "JavaScript ES6", "LocalStorage API", "Midtrans Integration", "Framer Motion"],
      images: [
        { id: 1, src: "/projects/alboy-store/1.png", label: "Main Landing & Hero Section" },
        { id: 2, src: "/projects/alboy-store/2.png", label: "Game Selection & Promotions" },
        { id: 3, src: "/projects/alboy-store/3.png", label: "System Status & Footer" },
        { id: 4, src: "/projects/alboy-store/4.png", label: "Product Configuration" },
        { id: 5, src: "/projects/alboy-store/5.png", label: "Payment Method Gateway" },
        { id: 6, src: "/projects/alboy-store/6.png", label: "Real-time Payment Validation" },
        { id: 7, src: "/projects/alboy-store/7.png", label: "Digital Invoice & Summary" },
      ]
    },
    "azam-barber-recap": {
      title: "Azam Barber Recap",
      insight: "Mendigitalisasi operasional barbershop untuk efisiensi pencatatan transaksi.",
      stack: ["Flutter", "SQLite", "Material Design 3", "Android OS", "Financial Report"],
      images: [
        { id: 1, src: "/projects/azam-barber/1.jpg", label: "Identity" },
        { id: 2, src: "/projects/azam-barber/2.jpg", label: "Features" },
        { id: 3, src: "/projects/azam-barber/3.jpg", label: "Core" },
      ]
    },
    "senja-khatulistiwa": {
      title: "Senja Khatulistiwa",
      insight: "Landing page eksklusif kopi lokal dengan atmosfer visual premium dan katalog menu modern.",
      stack: ["HTML5", "Vanilla CSS", "Vanilla JavaScript", "Framer Motion"],
      images: [
        { id: 1, src: "/projects/senja-khatulistiwa/1.png", label: "Home" },
        { id: 2, src: "/projects/senja-khatulistiwa/2.png", label: "About" },
        { id: 3, src: "/projects/senja-khatulistiwa/3.png", label: "Menu" },
        { id: 4, src: "/projects/senja-khatulistiwa/4.png", label: "Testimony" },
        { id: 5, src: "/projects/senja-khatulistiwa/5.png", label: "Contact" },
        { id: 6, src: "/projects/senja-khatulistiwa/6.png", label: "Footer" },
      ]
    },
  };

  // Ambil data berdasarkan slug, jika tidak ada tampilkan data default atau error
  const project = allProjects[slug as string];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-tech-bg text-white font-mono">
        <div className="text-center">
          <h1 className="text-4xl mb-4">404_PROJECT_NOT_FOUND</h1>
          <Link href="/" className="text-tech-primary underline">Back_to_Home</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-tech-bg text-tech-text p-6 md:p-24 font-mono">
      <Link href="/" className="text-tech-primary hover:text-tech-secondary transition-colors mb-12 inline-flex items-center gap-2 group">
        <span className="group-hover:-translate-x-1 transition-transform">{"<--"}</span> 
        back_to_main_repository
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-12">{project.title}</h1>

        <div className="space-y-16">
          {project.images.map((img: any) => (
            <div key={img.id} className="space-y-4">
              <div className="flex items-center gap-4 text-[10px] opacity-50 uppercase tracking-widest">
                <span className="text-tech-primary font-bold">#0{img.id}</span>
                <span>{img.label}</span>
                <div className="h-[1px] flex-1 bg-tech-border/30"></div>
              </div>
              <div className="relative aspect-video w-full rounded-2xl border border-tech-border overflow-hidden bg-tech-card shadow-2xl">
                <Image src={img.src} alt={img.label} fill className="object-contain p-2" />
              </div>
            </div>
          ))}
        </div>

        <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-tech-border/20 pt-12">
          <div>
            <h3 className="text-tech-text text-xl font-bold mb-4 uppercase">01_Project_Insight</h3>
            <p className="text-slate-400 text-lg leading-relaxed">{project.insight}</p>
          </div>
          <div className="bg-tech-card p-8 rounded-3xl border border-tech-border/50">
            <h3 className="text-tech-text text-xl mb-6 font-bold uppercase">02_Deployment_Stack</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              {project.stack.map((s: string) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="text-tech-primary">✓</span> {s}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </motion.div>
    </main>
  );
}