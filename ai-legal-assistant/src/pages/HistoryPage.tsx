import { AppLayout } from "@/components/AppLayout";
import { MessageSquare, FileText, Search, PenTool, Clock, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const historyItems = [
  { type: "question", icon: MessageSquare, title: "Can a landlord evict a tenant without notice under the Transfer of Property Act?", date: "Mar 23, 2026", time: "2:14 PM" },
  { type: "summary", icon: FileText, title: "High Court judgment on Section 138 NI Act — 18 pages analysed", date: "Mar 23, 2026", time: "11:45 AM" },
  { type: "draft", icon: PenTool, title: "Legal Notice under Section 80 CPC for breach of contract", date: "Mar 22, 2026", time: "4:30 PM" },
  { type: "search", icon: Search, title: "Right to privacy under Article 21 — Supreme Court rulings", date: "Mar 22, 2026", time: "3:15 PM" },
  { type: "question", icon: MessageSquare, title: "What constitutes unfair labour practice under the Industrial Disputes Act?", date: "Mar 22, 2026", time: "10:00 AM" },
  { type: "draft", icon: PenTool, title: "Rent Agreement for residential flat in Mumbai", date: "Mar 21, 2026", time: "5:20 PM" },
  { type: "summary", icon: FileText, title: "Partnership Deed under Indian Partnership Act — 14 pages analysed", date: "Mar 21, 2026", time: "2:00 PM" },
  { type: "search", icon: Search, title: "Intellectual property rights under the Patents Act, 1970", date: "Mar 20, 2026", time: "11:30 AM" },
];

const typeLabels: Record<string, string> = {
  question: "Question",
  summary: "Summary",
  search: "Case Search",
  draft: "Draft",
};

const typeColors: Record<string, string> = {
  question: "bg-blue-50 text-blue-600",
  summary: "bg-amber-50 text-amber-600",
  search: "bg-emerald-50 text-emerald-600",
  draft: "bg-rose-50 text-rose-600",
};

export default function HistoryPage() {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between animate-fade-up">
          <div>
            <h1 className="text-2xl font-serif font-bold tracking-tight">History</h1>
            <p className="text-sm text-muted-foreground mt-1">Your past queries, searches, and generated documents.</p>
          </div>
          <Button variant="outline" size="sm">
            <Trash2 className="mr-1.5 h-3.5 w-3.5" />
            Clear All
          </Button>
        </div>

        <div className="space-y-3 animate-fade-up stagger-1">
          {historyItems.map((item, i) => (
            <div
              key={i}
              className="surface-elevated rounded-xl px-5 py-4 flex items-center gap-4 card-hover cursor-pointer"
            >
              <div className={`flex h-9 w-9 items-center justify-center rounded-lg shrink-0 ${typeColors[item.type]}`}>
                <item.icon className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium truncate">{item.title}</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs text-muted-foreground">{typeLabels[item.type]}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {item.date} at {item.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
