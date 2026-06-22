import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const googleAnalyticsId = "G-0HB4MVTN61";
const siteUrl = "https://carlosavellar.github.io/portfolio";
const previewImage = `${siteUrl}/assets/modern-halftone-blue-on-light.png`;
const siteTitle = "José Carlos Santos | Front-end Developer";
const siteDescription =
  "Portfólio de José Carlos Santos, desenvolvedor front-end com React, Next.js, TypeScript, UX/UI, HTML, CSS e JavaScript.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "José Carlos Santos",
    "front-end developer",
    "React",
    "Next.js",
    "TypeScript",
    "UX/UI",
    "portfólio front-end",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Portfólio José Carlos Santos",
    images: [
      {
        url: previewImage,
        width: 900,
        height: 900,
        alt: "Imagem de prévia do portfólio de José Carlos Santos",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    images: [previewImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
      </body>
    </html>
  );
}
