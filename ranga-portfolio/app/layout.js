import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import {Navbar} from "@/components/Navbar"
import {Footer} from "@/components/Footer"



export const metadata = {
  title: "Sri Ranga Bharadwaj | AI/ML & Cloud Engineer",
  description: "Portfolio showcasing AI, ML, and Web Development projects.",
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
