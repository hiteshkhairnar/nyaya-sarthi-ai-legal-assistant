import { AppLayout } from "@/components/AppLayout";
import {
  MessageSquare,
  FileText,
  Search,
  PenTool,
  TrendingUp,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const quickActions = [
  { title: "Ask a Question", desc: "Get AI-powered answers on Indian law", icon: MessageSquare, url: "/ask", color: "bg-blue-50 text-blue-600" },
  { title: "Summarize Document", desc: "Analyse judgments & contracts", icon: FileText, url: "/summarize", color: "bg-amber-50 text-amber-600" },
  { title: "Search Case Law", desc: "Find SC & HC precedents", icon: Search, url: "/case-search", color: "bg-emerald-50 text-emerald-600" },
  { title: "Generate Draft", desc: "Create legal notices & petitions", icon: PenTool, url: "/draft", color: "bg-rose-50 text-rose-600" },
];

const stats = [
  { label: "Queries This Week", value: "47", icon: MessageSquare, change: "+12%" },
  { label: "Documents Analysed", value: "23", icon: FileText, change: "+8%" },
  { label: "Cases Found", value: "156", icon: Search, change: "+24%" },
  { label: "Drafts Generated", value: "11", icon: PenTool, change: "+5%" },
];

const recentItems = [
  { type: "Question", text: "Can a landlord evict a tenant without notice under the Transfer of Property Act?", time: "2 hours ago" },
  { type: "Summary", text: "High Court judgment on Section 138 NI Act — 18-page order", time: "5 hours ago" },
  { type: "Draft", text: "Legal Notice under Section 80 CPC for breach of contract", time: "Yesterday" },
  { type: "Search", text: "Right to privacy under Article 21 — Supreme Court rulings", time: "Yesterday" },
];

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="animate-fade-up">
          <h1 className="text-3xl font-serif font-bold tracking-tight">Namaste 🙏</h1>
          <p className="text-muted-foreground mt-1">Here's your legal workspace overview.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-up stagger-1">
          {stats.map((s) => (
            <div key={s.label} className="surface-elevated rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <s.icon className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs font-medium text-emerald-600 flex items-center gap-0.5">
                  <TrendingUp className="h-3 w-3" />
                  {s.change}
                </span>
              </div>
              <p className="text-2xl font-bold tabular-nums">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="animate-fade-up stagger-2">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((a) => (
              <Link
                key={a.title}
                to={a.url}
                className="surface-elevated rounded-xl p-5 card-hover group block"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${a.color} mb-4`}>
                  <a.icon className="h-5 w-5" />
                </div>
                <h3 className="font-medium text-sm mb-1">{a.title}</h3>
                <p className="text-xs text-muted-foreground">{a.desc}</p>
                <ArrowRight className="h-4 w-4 text-muted-foreground mt-3 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="animate-fade-up stagger-3">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
            <Link to="/history" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              View all →
            </Link>
          </div>
          <div className="surface-elevated rounded-xl divide-y divide-border">
            {recentItems.map((item, i) => (
              <div key={i} className="px-5 py-4 flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-secondary shrink-0">
                  <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium truncate">{item.text}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.type} · {item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
