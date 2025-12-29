import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import DarkModeToggle from "@/components/DarkModeToggle";
import LoadingScreen from "@/components/LoadingScreen";

// Konfigurasi Font Serif untuk Heading (Nuansa Kafe)
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair" 
});

// Konfigurasi Font Sans untuk Body (Modern & Readable)
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Tambahkan class "dark" di sini secara manual
    <html 
      lang="en" 
      className={`dark ${playfair.variable} ${inter.variable}`} 
      suppressHydrationWarning // Tambahkan ini agar tidak ada error di konsol
    >
      <body className={`${inter.variable} font-sans antialiased`}>
        <LoadingScreen />
        <DarkModeToggle />
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: "Tabia Hanural | AI & Full-Stack Developer", // Menambahkan AI karena ini nilai jual unikmu
  description: "Specialized in crafting intelligent digital experiences. Building high-performance Web and Android solutions with Gemini AI integration.",
  openGraph: {
    title: "Tabia Hanural | Digital Engineer Portfolio",
    description: "Full Stack Developer bridging AI intelligence with seamless Web & Mobile experiences.",
    url: "https://tabia-portfolio.vercel.app", 
    siteName: "Tabia Hanural",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Tabia Hanural Portfolio Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
}