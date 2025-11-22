"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#education", label: "Education" },
  { href: "/#achievements", label: "Achievements" },
  { href: "/#contact", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const handleResumePreview = () => {
    if (typeof window !== "undefined") {
      const section = document.getElementById("resume")
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" })
      }
      window.dispatchEvent(new CustomEvent("openResumePreview"))
    }
    setIsOpen(false)
  }

  // Close the mobile menu on route/path changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-border bg-background/70">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        {/* Logo / Name */}
        <Link href="/" className="text-xl font-semibold tracking-tight hover:opacity-80">
          Ranga<span className="text-primary">.dev</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-lg transition-colors hover:text-primary",
                pathname === link.href ? "text-primary font-medium" : "text-muted-foreground"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={handleResumePreview}
            className="rounded-full border border-primary/50 bg-primary/10 px-3 py-1 text-sm font-semibold text-white transition-colors hover:text-primary hover:font-semibold hover:border-primary"
          >
            Resume
          </button>
        </div>

        {/* Right controls: Theme + Mobile toggle */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-nav"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div id="mobile-nav" className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-base transition-colors hover:text-primary",
                    pathname === link.href ? "text-primary font-medium" : "text-muted-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={handleResumePreview}
                className="rounded-full border border-primary/50 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/15 hover:border-primary text-left"
              >
                Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
