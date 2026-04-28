import type { Metadata } from "next";
import { DM_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DeployWise",
  description: "Transformamos visão técnica em vantagem competitiva. Desenvolvimento de alta performance para empresas que não aceitam o básico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${dmSans.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground font-body flex flex-col relative">
        {/* Global Noise Texture */}
        <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        {children}
      </body>
    </html>
  );
}
