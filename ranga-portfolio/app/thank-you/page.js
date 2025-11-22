import Link from "next/link"
import { ArrowLeft, CheckCircle2, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Message received | Sri Ranga Bharadwaj",
  description: "Thanks for reaching out — your note is in my inbox and I'll respond shortly.",
}

export default function ThankYouPage() {
  return (
    <section className="relative overflow-hidden py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" aria-hidden="true" />
      <div className="absolute -left-28 -top-28 h-64 w-64 rounded-full bg-primary/15 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-emerald-400/15 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-sm text-primary shadow-sm backdrop-blur">
          <CheckCircle2 size={18} />
          Message sent successfully
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Thanks for reaching out.</h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Your note just landed in my inbox. I typically reply within 1–2 business days with next steps or a couple of
            quick questions to clarify your project.
          </p>
        </div>

        <div className="grid w-full gap-4 text-left sm:grid-cols-2">
          <div className="rounded-xl border border-border/80 bg-background/80 p-5 shadow-sm backdrop-blur">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">What happens next</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                You'll get a confirmation and a personal reply from me (no bots in between).
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                If the project is time-sensitive, feel free to add a timeline so I can prioritize accordingly.
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border/80 bg-background/80 p-5 shadow-sm backdrop-blur">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">Want to talk sooner?</p>
            <p className="text-muted-foreground">
              Drop me a line directly and I'll do my best to respond the same day.
            </p>
            <Link
              href="mailto:chakilamsriranga@gmail.com"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              <Mail size={16} />
              chakilamsriranga@gmail.com
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to portfolio
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="https://linkedin.com/in/srirangabharadwaj" target="_blank">
              Connect on LinkedIn
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
