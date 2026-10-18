import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Scale, ArrowRight, MessageSquare, FileText, Search, PenTool } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Legal Q&A",
    desc: "Get instant answers on Indian law — IPC, CrPC, Constitution, and more.",
  },
  {
    icon: FileText,
    title: "Document Summarizer",
    desc: "Upload FIRs, judgments, contracts, and legal notices for quick summaries.",
  },
  {
    icon: Search,
    title: "Case Law Search",
    desc: "Search Supreme Court, High Court, and Tribunal judgments with AI matching.",
  },
  {
    icon: PenTool,
    title: "Draft Generator",
    desc: "Generate legal notices, affidavits, petitions, and agreements in seconds.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="border-b border-border bg-card">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Scale className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <span className="text-lg font-serif font-semibold">न्याय सारथी</span>
              <span className="text-xs text-muted-foreground ml-2 hidden sm:inline">Nyaya Sarthi</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link to="/login">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-4 py-24 lg:py-32 text-center">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground mb-6">
            <Scale className="h-3.5 w-3.5" />
            AI-Powered Indian Legal Intelligence
          </div>
          <h1 className="text-4xl lg:text-6xl font-serif font-bold leading-[1.08] text-balance mb-6 tracking-tight">
            Your AI companion for Indian law research
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
            Ask questions on Indian statutes, summarize court judgments, search Supreme Court & High Court case law, and draft legal documents — all in one platform.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" asChild className="group">
              <Link to="/login">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/login">Watch Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 pb-24 lg:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`surface-elevated rounded-xl p-8 card-hover animate-fade-up stagger-${i + 1}`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary mb-5">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 flex items-center justify-between text-sm text-muted-foreground">
          <span>© 2026 Nyaya Sarthi. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
