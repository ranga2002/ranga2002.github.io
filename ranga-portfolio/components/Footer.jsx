export function Footer() {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-sm py-6 mt-12">
      <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
        <p>Copyright {new Date().getFullYear()} Sri Ranga Bharadwaj Chakilam</p>
        <p className="mt-1">
          Built with Next.js, Tailwind CSS, and a curiosity for useful AI experiences.
        </p>
      </div>
    </footer>
  )
}
