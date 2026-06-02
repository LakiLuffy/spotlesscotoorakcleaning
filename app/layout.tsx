import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://spotlesscohousecleanerstoorak.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Premium House Cleaning Toorak | Cleaners South Yarra & Malvern | Spotless Co.",
  description:
    "Toorak's trusted house cleaning service. Residential, deep & end of lease cleaning across South Yarra, Malvern, Armadale & surrounds. Satisfaction guaranteed. Book today.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Premium House Cleaning Toorak | Spotless Co.",
    description:
      "Premium residential, deep and end of lease cleaning across Toorak, South Yarra, Malvern, Armadale and surrounding suburbs.",
    url: siteUrl,
    siteName: "Spotless Co. Cleaning Experts",
    images: [{ url: "/og-cover.jpg", width: 1200, height: 630, alt: "Professional house cleaner wiping kitchen bench in Toorak home" }],
    locale: "en_AU",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium House Cleaning Toorak | Spotless Co.",
    description: "Toorak's trusted house cleaning service across Melbourne's inner south.",
    images: ["/og-cover.jpg"]
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png"
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Spotless Co. Cleaning Experts",
  description: "Premium house cleaning services in Toorak, South Yarra, Malvern and surrounding Melbourne suburbs.",
  url: siteUrl,
  telephone: "+61468107899",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toorak",
    addressRegion: "VIC",
    postalCode: "3142",
    addressCountry: "AU"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -37.8425,
    longitude: 145.0145
  },
  areaServed: ["Toorak", "South Yarra", "Malvern", "Armadale", "Prahran", "Kooyong", "Glen Iris", "Hawthorn", "Windsor"].map((name) => ({
    "@type": "City",
    name
  })),
  priceRange: "$$",
  openingHours: "Mo-Sa 07:00-18:00",
  image: `${siteUrl}/og-cover.jpg`,
  sameAs: []
};

const serviceSchema = ["Regular house cleaning", "Deep cleaning", "End of lease cleaning", "Commercial cleaning"].map((serviceType) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType,
  provider: {
    "@type": "LocalBusiness",
    name: "Spotless Co. Cleaning Experts",
    telephone: "+61468107899"
  },
  areaServed: ["Toorak", "South Yarra", "Malvern", "Armadale", "Prahran", "Kooyong"],
  url: siteUrl
}));

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    ["How much does house cleaning in Toorak cost?", "Our regular house cleaning starts from $150 for a standard 2-bedroom home in Toorak. Pricing depends on home size, number of bathrooms, and service type."],
    ["Do you offer end of lease cleaning in South Yarra and Malvern?", "Yes. We provide end of lease cleaning across South Yarra, Malvern, Armadale, Prahran, and all surrounding suburbs."],
    ["What cleaning products do you use?", "We use eco-friendly, non-toxic cleaning products that are safe for children, pets, and all surfaces."],
    ["How do I book a clean?", "You can book online via our contact form, call us directly on 0468 107 899, or send a text."],
    ["Do the same cleaners come each visit?", "Yes. We assign a consistent team to your home so they learn your preferences, layout, and standards."],
    ["What suburbs do you service?", "Spotless Co. services Toorak, South Yarra, Malvern, Armadale, Prahran, Kooyong, Glen Iris, Hawthorn, Windsor, and surrounding suburbs."]
  ].map(([name, text]) => ({
    "@type": "Question",
    name,
    acceptedAnswer: {
      "@type": "Answer",
      text
    }
  }))
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <script dangerouslySetInnerHTML={{ __html: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});})(window,document,'script','dataLayer','GTM-XXXXXXX');" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </head>
      <body>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>
        {children}
      </body>
    </html>
  );
}
