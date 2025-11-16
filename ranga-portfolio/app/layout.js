import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import {Navbar} from "@/components/Navbar"
import {Footer} from "@/components/Footer"



export const metadata = {
  title: "Sri Ranga Bharadwaj | AI/ML & Cloud Engineer",
  description: "Portfolio showcasing AI, ML, and Web Development projects.",
  metadataBase: new URL("https://example.com"),
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Sri Ranga Bharadwaj | AI/ML & Cloud Engineer",
    description: "Portfolio showcasing AI, ML, and Web Development projects.",
    url: "/",
    siteName: "Ranga.dev",
    images: [
      {
        url: "/opengraph-image.svg",
        width: 1200,
        height: 630,
        alt: "Sri Ranga Bharadwaj Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Ranga Bharadwaj | AI/ML & Cloud Engineer",
    description: "Portfolio showcasing AI, ML, and Web Development projects.",
    images: ["/twitter-image.svg"],
  },
  manifest: "/manifest.webmanifest",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
