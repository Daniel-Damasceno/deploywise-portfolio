import type { Metadata } from "next";
import { DM_Sans, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import {
  COMPANY_NAME,
  COMPANY_EMAIL,
  COMPANY_PHONE,
  COMPANY_DESCRIPTION,
} from "@/lib/constants";
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://deploywise.com.br"
  ),
  title: {
    default: `${COMPANY_NAME} | Desenvolvimento Web, Sistemas e Social Media`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: COMPANY_DESCRIPTION,
  keywords: [
    "desenvolvimento web",
    "softhouse",
    "sistemas",
    "social media",
    "design UI/UX",
    "Manaus",
    "aplicativos",
    "landing page",
    "site institucional",
  ],
  authors: [{ name: COMPANY_NAME }],
  creator: COMPANY_NAME,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} | Desenvolvimento Web, Sistemas e Social Media`,
    description: COMPANY_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: COMPANY_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} | Desenvolvimento Web, Sistemas e Social Media`,
    description: COMPANY_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: COMPANY_NAME,
  description:
    "Softhouse especializada em desenvolvimento web, sistemas, design UI/UX e social media.",
  url: "https://deploywise-portfolio.vercel.app/",
  telephone: COMPANY_PHONE,
  email: COMPANY_EMAIL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manaus",
    addressRegion: "AM",
    addressCountry: "BR",
  },
  areaServed: ["Manaus", "Amazonas", "Brasil"],
  serviceType: [
    "Desenvolvimento Web",
    "Sistemas sob medida",
    "Design UI/UX",
    "Social Media",
  ],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="pt-BR"
      className={`dark ${dmSans.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preload critical assets if needed */}
      </head>
      <body className="min-h-screen bg-background text-foreground font-body flex flex-col relative">
        {/* Global Noise Texture - Optimized with local CSS pattern or lower opacity */}
        <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.02] mix-blend-overlay bg-noise" />
        
        {children}

        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
